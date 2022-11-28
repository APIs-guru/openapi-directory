from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutBotPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

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
    r"""PutBotRequestBodyAbortStatement
    A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
    """
    
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    

@dataclass_json
@dataclass
class PutBotRequestBodyClarificationPrompt:
    r"""PutBotRequestBodyClarificationPrompt
    Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
    """
    
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAttempts') }})
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    
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
    child_directed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childDirected') }})
    locale: PutBotRequestBodyLocaleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    abort_statement: Optional[PutBotRequestBodyAbortStatement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortStatement') }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    clarification_prompt: Optional[PutBotRequestBodyClarificationPrompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clarificationPrompt') }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    detect_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectSentiment') }})
    enable_model_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableModelImprovements') }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleSessionTTLInSeconds') }})
    intents: Optional[List[shared.Intent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidenceThreshold') }})
    process_behavior: Optional[PutBotRequestBodyProcessBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processBehavior') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceId') }})
    

@dataclass
class PutBotRequest:
    headers: PutBotHeaders = field()
    path_params: PutBotPathParams = field()
    request: PutBotRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutBotResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    put_bot_response: Optional[shared.PutBotResponse] = field(default=None)
    
