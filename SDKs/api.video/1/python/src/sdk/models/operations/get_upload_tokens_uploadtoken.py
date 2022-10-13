from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUploadTokensUploadTokenPathParams:
    upload_token: str = field(default=None, metadata={'path_param': { 'field_name': 'uploadToken', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUploadTokensUploadTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetUploadTokensUploadTokenRequest:
    path_params: GetUploadTokensUploadTokenPathParams = field(default=None)
    security: GetUploadTokensUploadTokenSecurity = field(default=None)
    

@dataclass
class GetUploadTokensUploadTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    upload_token: Optional[shared.UploadToken] = field(default=None)
    
