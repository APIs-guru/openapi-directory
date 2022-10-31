from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutBotPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutBotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutBotRequestBodyAbortStatement:
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    

@dataclass_json
@dataclass
class PutBotRequestBodyClarificationPrompt:
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAttempts' }})
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    
class PutBotRequestBodyLocaleEnum(str, Enum):
    DE_DE = "de-DE"
    EN_AU = "en-AU"
    EN_GB = "en-GB"
    EN_IN = "en-IN"
    EN_US = "en-US"
    ES_419 = "es-419"
    ES_ES = "es-ES"
    ES_US = "es-US"
    FR_FR = "fr-FR"
    FR_CA = "fr-CA"
    IT_IT = "it-IT"
    JA_JP = "ja-JP"
    KO_KR = "ko-KR"

class PutBotRequestBodyProcessBehaviorEnum(str, Enum):
    SAVE = "SAVE"
    BUILD = "BUILD"


@dataclass_json
@dataclass
class PutBotRequestBody:
    abort_statement: Optional[PutBotRequestBodyAbortStatement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortStatement' }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    child_directed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childDirected' }})
    clarification_prompt: Optional[PutBotRequestBodyClarificationPrompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clarificationPrompt' }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    detect_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectSentiment' }})
    enable_model_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableModelImprovements' }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleSessionTTLInSeconds' }})
    intents: Optional[List[shared.Intent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    locale: PutBotRequestBodyLocaleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidenceThreshold' }})
    process_behavior: Optional[PutBotRequestBodyProcessBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processBehavior' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceId' }})
    

@dataclass
class PutBotRequest:
    path_params: PutBotPathParams = field(default=None)
    headers: PutBotHeaders = field(default=None)
    request: PutBotRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutBotResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    put_bot_response: Optional[shared.PutBotResponse] = field(default=None)
    status_code: int = field(default=None)
    
