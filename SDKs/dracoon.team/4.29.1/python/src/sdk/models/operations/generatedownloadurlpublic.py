from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenerateDownloadURLPublicPathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDownloadURLPublicRequest:
    path_params: GenerateDownloadURLPublicPathParams = field()
    request: shared.PublicDownloadTokenGenerateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDownloadURLPublicResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    public_download_token_generate_response: Optional[shared.PublicDownloadTokenGenerateResponse] = field(default=None)
    
