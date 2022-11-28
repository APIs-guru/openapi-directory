from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateRadiusConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRadiusConfigRequest:
    headers: UpdateRadiusConfigHeaders = field()
    request: shared.RadiusConfigUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRadiusConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    radius_config: Optional[shared.RadiusConfig] = field(default=None)
    
