from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GeneratePresignedUrlsFilesPathParams:
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneratePresignedUrlsFilesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneratePresignedUrlsFilesRequest:
    path_params: GeneratePresignedUrlsFilesPathParams = field(default=None)
    headers: GeneratePresignedUrlsFilesHeaders = field(default=None)
    request: shared.GeneratePresignedUrlsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GeneratePresignedUrlsFilesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    presigned_url_list: Optional[shared.PresignedURLList] = field(default=None)
    status_code: int = field(default=None)
    
