from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetItemDownloadablesQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemDownloadablesRequest:
    query_params: GetItemDownloadablesQueryParams = field()
    request: shared.ItemDownloadableRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetItemDownloadablesResponse:
    content_type: str = field()
    status_code: int = field()
    item_downloadable_list: Optional[shared.ItemDownloadableList] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
