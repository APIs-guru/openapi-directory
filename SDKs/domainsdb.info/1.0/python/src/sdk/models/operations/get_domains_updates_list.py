from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDomainsUpdatesListQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsUpdatesListRequest:
    query_params: GetDomainsUpdatesListQueryParams = field(default=None)
    

@dataclass
class GetDomainsUpdatesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_model: Optional[shared.UpdateModel] = field(default=None)
    
