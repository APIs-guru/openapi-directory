from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateTokenHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateTokenRequestBody:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    device_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCode') }})
    grant_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantType') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass
class CreateTokenRequest:
    headers: CreateTokenHeaders = field()
    request: CreateTokenRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTokenResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    authorization_pending_exception: Optional[Any] = field(default=None)
    create_token_response: Optional[shared.CreateTokenResponse] = field(default=None)
    expired_token_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_client_exception: Optional[Any] = field(default=None)
    invalid_grant_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_scope_exception: Optional[Any] = field(default=None)
    slow_down_exception: Optional[Any] = field(default=None)
    unauthorized_client_exception: Optional[Any] = field(default=None)
    unsupported_grant_type_exception: Optional[Any] = field(default=None)
    
