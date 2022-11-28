from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutBotResponse:
    abort_statement: Optional[Statement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortStatement') }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    child_directed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childDirected') }})
    clarification_prompt: Optional[Prompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clarificationPrompt') }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createVersion') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    detect_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectSentiment') }})
    enable_model_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableModelImprovements') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleSessionTTLInSeconds') }})
    intents: Optional[List[Intent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale: Optional[LocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidenceThreshold') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceId') }})
    
