from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUploadTokensUploadTokenPathParams:
    upload_token: str = field(metadata={'path_param': { 'field_name': 'uploadToken', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUploadTokensUploadTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetUploadTokensUploadTokenRequest:
    path_params: GetUploadTokensUploadTokenPathParams = field()
    security: GetUploadTokensUploadTokenSecurity = field()
    

@dataclass
class GetUploadTokensUploadTokenResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    upload_token: Optional[shared.UploadToken] = field(default=None)
    
