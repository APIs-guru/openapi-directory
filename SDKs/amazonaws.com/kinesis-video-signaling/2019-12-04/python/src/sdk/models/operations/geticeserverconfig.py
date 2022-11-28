from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetIceServerConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetIceServerConfigRequestBodyServiceEnum(str, Enum):
    TURN = "TURN"


@dataclass_json
@dataclass
class GetIceServerConfigRequestBody:
    channel_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelARN') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    service: Optional[GetIceServerConfigRequestBodyServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    

@dataclass
class GetIceServerConfigRequest:
    headers: GetIceServerConfigHeaders = field()
    request: GetIceServerConfigRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetIceServerConfigResponse:
    content_type: str = field()
    status_code: int = field()
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    get_ice_server_config_response: Optional[shared.GetIceServerConfigResponse] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_client_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    session_expired_exception: Optional[Any] = field(default=None)
    
