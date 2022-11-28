from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestRadiusConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestRadiusConfigRequest:
    headers: TestRadiusConfigHeaders = field()
    

@dataclass
class TestRadiusConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
