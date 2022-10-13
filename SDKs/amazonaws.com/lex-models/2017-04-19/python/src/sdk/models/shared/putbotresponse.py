from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import statement
from . import prompt
from . import intent
from . import locale_enum
from . import status_enum
from . import tag


@dataclass_json
@dataclass
class PutBotResponse:
    abort_statement: Optional[statement.Statement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortStatement' }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    child_directed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childDirected' }})
    clarification_prompt: Optional[prompt.Prompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clarificationPrompt' }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createVersion' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    detect_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectSentiment' }})
    enable_model_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableModelImprovements' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleSessionTTLInSeconds' }})
    intents: Optional[List[intent.Intent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale: Optional[locale_enum.LocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidenceThreshold' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceId' }})
    
