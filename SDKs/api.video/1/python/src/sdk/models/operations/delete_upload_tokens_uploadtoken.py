from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteUploadTokensUploadTokenPathParams:
    upload_token: str = field(default=None, metadata={'path_param': { 'field_name': 'uploadToken', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUploadTokensUploadTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteUploadTokensUploadTokenRequest:
    path_params: DeleteUploadTokensUploadTokenPathParams = field(default=None)
    security: DeleteUploadTokensUploadTokenSecurity = field(default=None)
    

@dataclass
class DeleteUploadTokensUploadTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
