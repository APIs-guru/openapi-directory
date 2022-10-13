from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateBotAliasPathParams:
    bot_alias_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botAliasId', 'style': 'simple', 'explode': False }})
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBotAliasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateBotAliasRequestBodyConversationLogSettings:
    audio_log_settings: Optional[List[shared.AudioLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioLogSettings' }})
    text_log_settings: Optional[List[shared.TextLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textLogSettings' }})
    

@dataclass_json
@dataclass
class UpdateBotAliasRequestBodySentimentAnalysisSettings:
    detect_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectSentiment' }})
    

@dataclass_json
@dataclass
class UpdateBotAliasRequestBody:
    bot_alias_locale_settings: Optional[dict[str, shared.BotAliasLocaleSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasLocaleSettings' }})
    bot_alias_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasName' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    conversation_log_settings: Optional[UpdateBotAliasRequestBodyConversationLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationLogSettings' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    sentiment_analysis_settings: Optional[UpdateBotAliasRequestBodySentimentAnalysisSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisSettings' }})
    

@dataclass
class UpdateBotAliasRequest:
    path_params: UpdateBotAliasPathParams = field(default=None)
    headers: UpdateBotAliasHeaders = field(default=None)
    request: UpdateBotAliasRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBotAliasResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_bot_alias_response: Optional[shared.UpdateBotAliasResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
