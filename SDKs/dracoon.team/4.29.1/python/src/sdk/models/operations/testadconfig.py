from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class TestAdConfigRequest:
    headers: TestAdConfigHeaders = field(default=None)
    request: shared.TestActiveDirectoryConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestAdConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    test_active_directory_config_response: Optional[shared.TestActiveDirectoryConfigResponse] = field(default=None)
    
