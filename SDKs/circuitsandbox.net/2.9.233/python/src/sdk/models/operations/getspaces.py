from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSpacesQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    timestamp: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpacesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpacesRequest:
    query_params: GetSpacesQueryParams = field()
    security: GetSpacesSecurity = field()
    

@dataclass
class GetSpacesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_spaces_result: Optional[Any] = field(default=None)
    
