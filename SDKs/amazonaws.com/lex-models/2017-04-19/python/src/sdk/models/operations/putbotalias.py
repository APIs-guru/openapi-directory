from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutBotAliasPathParams:
    bot_name: str = field(metadata={'path_param': { 'field_name': 'botName', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutBotAliasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutBotAliasRequestBodyConversationLogs:
    r"""PutBotAliasRequestBodyConversationLogs
    Provides the settings needed for conversation logs.
    """
    
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRoleArn') }})
    log_settings: Optional[List[shared.LogSettingsRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logSettings') }})
    

@dataclass_json
@dataclass
class PutBotAliasRequestBody:
    bot_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    conversation_logs: Optional[PutBotAliasRequestBodyConversationLogs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationLogs') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class PutBotAliasRequest:
    headers: PutBotAliasHeaders = field()
    path_params: PutBotAliasPathParams = field()
    request: PutBotAliasRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutBotAliasResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    put_bot_alias_response: Optional[shared.PutBotAliasResponse] = field(default=None)
    
