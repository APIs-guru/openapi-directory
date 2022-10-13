from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetItemsMediaClipFilesQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemsMediaClipFilesRequest:
    query_params: GetItemsMediaClipFilesQueryParams = field(default=None)
    request: shared.ItemDownloadableRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetItemsMediaClipFilesResponse:
    content_type: str = field(default=None)
    item_clip_files_list: Optional[shared.ItemClipFilesList] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
