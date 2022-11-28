from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateBotAliasPathParams:
    bot_alias_id: str = field(metadata={'path_param': { 'field_name': 'botAliasId', 'style': 'simple', 'explode': False }})
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBotAliasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateBotAliasRequestBodyConversationLogSettings:
    r"""UpdateBotAliasRequestBodyConversationLogSettings
    Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
    """
    
    audio_log_settings: Optional[List[shared.AudioLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioLogSettings') }})
    text_log_settings: Optional[List[shared.TextLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textLogSettings') }})
    

@dataclass_json
@dataclass
class UpdateBotAliasRequestBodySentimentAnalysisSettings:
    r"""UpdateBotAliasRequestBodySentimentAnalysisSettings
    Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
    """
    
    detect_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectSentiment') }})
    

@dataclass_json
@dataclass
class UpdateBotAliasRequestBody:
    bot_alias_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasName') }})
    bot_alias_locale_settings: Optional[dict[str, shared.BotAliasLocaleSettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasLocaleSettings') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    conversation_log_settings: Optional[UpdateBotAliasRequestBodyConversationLogSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationLogSettings') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    sentiment_analysis_settings: Optional[UpdateBotAliasRequestBodySentimentAnalysisSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysisSettings') }})
    

@dataclass
class UpdateBotAliasRequest:
    headers: UpdateBotAliasHeaders = field()
    path_params: UpdateBotAliasPathParams = field()
    request: UpdateBotAliasRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBotAliasResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_bot_alias_response: Optional[shared.UpdateBotAliasResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
