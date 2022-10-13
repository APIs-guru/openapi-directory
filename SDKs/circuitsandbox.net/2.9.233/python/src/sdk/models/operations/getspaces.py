from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetSpacesQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    timestamp: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpacesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpacesRequest:
    query_params: GetSpacesQueryParams = field(default=None)
    security: GetSpacesSecurity = field(default=None)
    

@dataclass
class GetSpacesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_spaces_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
