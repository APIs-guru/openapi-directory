from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SetUserAttributesPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetUserAttributesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetUserAttributesRequest:
    headers: SetUserAttributesHeaders = field()
    path_params: SetUserAttributesPathParams = field()
    request: shared.UserAttributes = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetUserAttributesResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_data: Optional[shared.UserDataOutput] = field(default=None)
    
