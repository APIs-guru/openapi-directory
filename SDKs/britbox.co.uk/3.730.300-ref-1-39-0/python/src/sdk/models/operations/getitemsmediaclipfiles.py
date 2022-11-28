from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetItemsMediaClipFilesQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemsMediaClipFilesRequest:
    query_params: GetItemsMediaClipFilesQueryParams = field()
    request: shared.ItemDownloadableRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetItemsMediaClipFilesResponse:
    content_type: str = field()
    status_code: int = field()
    item_clip_files_list: Optional[shared.ItemClipFilesList] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
