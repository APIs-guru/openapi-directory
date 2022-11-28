from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GeneratePresignedUrlsFilesPathParams:
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneratePresignedUrlsFilesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneratePresignedUrlsFilesRequest:
    headers: GeneratePresignedUrlsFilesHeaders = field()
    path_params: GeneratePresignedUrlsFilesPathParams = field()
    request: shared.GeneratePresignedUrlsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GeneratePresignedUrlsFilesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    presigned_url_list: Optional[shared.PresignedURLList] = field(default=None)
    
