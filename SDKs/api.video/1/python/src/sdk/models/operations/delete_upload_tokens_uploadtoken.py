from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteUploadTokensUploadTokenPathParams:
    upload_token: str = field(metadata={'path_param': { 'field_name': 'uploadToken', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUploadTokensUploadTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteUploadTokensUploadTokenRequest:
    path_params: DeleteUploadTokensUploadTokenPathParams = field()
    security: DeleteUploadTokensUploadTokenSecurity = field()
    

@dataclass
class DeleteUploadTokensUploadTokenResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    
