from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsUpdatesListQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsUpdatesListRequest:
    query_params: GetDomainsUpdatesListQueryParams = field()
    

@dataclass
class GetDomainsUpdatesListResponse:
    content_type: str = field()
    status_code: int = field()
    update_model: Optional[shared.UpdateModel] = field(default=None)
    
