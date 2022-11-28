from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAuthConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAuthConfigRequest:
    headers: UpdateAuthConfigHeaders = field()
    request: shared.AuthConfig = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAuthConfigResponse:
    content_type: str = field()
    status_code: int = field()
    auth_config: Optional[shared.AuthConfig] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
