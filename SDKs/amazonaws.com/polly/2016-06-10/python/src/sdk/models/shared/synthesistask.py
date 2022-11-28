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
class SynthesisTask:
    r"""SynthesisTask
    SynthesisTask object that provides information about a speech synthesis task.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine: Optional[EngineEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Engine') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    lexicon_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LexiconNames') }})
    output_format: Optional[OutputFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFormat') }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUri') }})
    request_characters: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestCharacters') }})
    sample_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleRate') }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    speech_mark_types: Optional[List[SpeechMarkTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpeechMarkTypes') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskId') }})
    task_status: Optional[TaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskStatus') }})
    task_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskStatusReason') }})
    text_type: Optional[TextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextType') }})
    voice_id: Optional[VoiceIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceId') }})
    
