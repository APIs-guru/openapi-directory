from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateOpenIDIdpConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class CreateOpenIDIdpConfigRequest:
    headers: CreateOpenIDIdpConfigHeaders = field(default=None)
    request: shared.CreateOpenIDIdpConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOpenIDIdpConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_idp_config: Optional[shared.OpenIDIdpConfig] = field(default=None)
    status_code: int = field(default=None)
    
