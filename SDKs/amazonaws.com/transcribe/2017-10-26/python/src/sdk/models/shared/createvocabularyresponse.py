from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateVocabularyResponse:
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vocabulary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    vocabulary_state: Optional[VocabularyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyState') }})
    
