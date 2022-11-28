from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdConfigRequest:
    headers: CreateAdConfigHeaders = field()
    request: shared.CreateActiveDirectoryConfigRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAdConfigResponse:
    content_type: str = field()
    status_code: int = field()
    active_directory_config: Optional[shared.ActiveDirectoryConfig] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
