from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GeneratePresignedUrlsPublicPathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneratePresignedUrlsPublicHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class GeneratePresignedUrlsPublicRequest:
    path_params: GeneratePresignedUrlsPublicPathParams = field(default=None)
    headers: GeneratePresignedUrlsPublicHeaders = field(default=None)
    request: shared.GeneratePresignedUrlsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GeneratePresignedUrlsPublicResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    presigned_url_list: Optional[shared.PresignedURLList] = field(default=None)
    status_code: int = field(default=None)
    
