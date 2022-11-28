from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateAdmChannelPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAdmChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAdmChannelRequestBodyAdmChannelRequest:
    r"""UpdateAdmChannelRequestBodyAdmChannelRequest
    Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecret') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    

@dataclass_json
@dataclass
class UpdateAdmChannelRequestBody:
    adm_channel_request: UpdateAdmChannelRequestBodyAdmChannelRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADMChannelRequest') }})
    

@dataclass
class UpdateAdmChannelRequest:
    headers: UpdateAdmChannelHeaders = field()
    path_params: UpdateAdmChannelPathParams = field()
    request: UpdateAdmChannelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAdmChannelResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_adm_channel_response: Optional[shared.UpdateAdmChannelResponse] = field(default=None)
    
