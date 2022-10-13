from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetItemDownloadablesQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemDownloadablesRequest:
    query_params: GetItemDownloadablesQueryParams = field(default=None)
    request: shared.ItemDownloadableRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetItemDownloadablesResponse:
    content_type: str = field(default=None)
    item_downloadable_list: Optional[shared.ItemDownloadableList] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
