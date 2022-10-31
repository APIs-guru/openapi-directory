from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdConfigRequest:
    headers: CreateAdConfigHeaders = field(default=None)
    request: shared.CreateActiveDirectoryConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAdConfigResponse:
    active_directory_config: Optional[shared.ActiveDirectoryConfig] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
