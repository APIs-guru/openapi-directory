from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateBotPathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateBotRequestBodyDataPrivacy:
    r"""UpdateBotRequestBodyDataPrivacy
    By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
    """
    
    child_directed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childDirected') }})
    

@dataclass_json
@dataclass
class UpdateBotRequestBody:
    bot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botName') }})
    data_privacy: UpdateBotRequestBodyDataPrivacy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPrivacy') }})
    idle_session_ttl_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleSessionTTLInSeconds') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class UpdateBotRequest:
    headers: UpdateBotHeaders = field()
    path_params: UpdateBotPathParams = field()
    request: UpdateBotRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBotResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_bot_response: Optional[shared.UpdateBotResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
