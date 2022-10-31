from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateBotAliasPathParams:
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBotAliasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateBotAliasRequestBodyConversationLogSettings:
    audio_log_settings: Optional[List[shared.AudioLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioLogSettings' }})
    text_log_settings: Optional[List[shared.TextLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textLogSettings' }})
    

@dataclass_json
@dataclass
class CreateBotAliasRequestBodySentimentAnalysisSettings:
    detect_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectSentiment' }})
    

@dataclass_json
@dataclass
class CreateBotAliasRequestBody:
    bot_alias_locale_settings: Optional[dict[str, shared.BotAliasLocaleSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasLocaleSettings' }})
    bot_alias_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasName' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    conversation_log_settings: Optional[CreateBotAliasRequestBodyConversationLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationLogSettings' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    sentiment_analysis_settings: Optional[CreateBotAliasRequestBodySentimentAnalysisSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisSettings' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateBotAliasRequest:
    path_params: CreateBotAliasPathParams = field(default=None)
    headers: CreateBotAliasHeaders = field(default=None)
    request: CreateBotAliasRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBotAliasResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_bot_alias_response: Optional[shared.CreateBotAliasResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
