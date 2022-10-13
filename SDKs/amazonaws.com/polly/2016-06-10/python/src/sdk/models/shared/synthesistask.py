from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import engine_enum
from . import languagecode_enum
from . import outputformat_enum
from . import speechmarktype_enum
from . import taskstatus_enum
from . import texttype_enum
from . import voiceid_enum


@dataclass_json
@dataclass
class SynthesisTask:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine: Optional[engine_enum.EngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    lexicon_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LexiconNames' }})
    output_format: Optional[outputformat_enum.OutputFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputFormat' }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputUri' }})
    request_characters: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestCharacters' }})
    sample_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleRate' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    speech_mark_types: Optional[List[speechmarktype_enum.SpeechMarkTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpeechMarkTypes' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskId' }})
    task_status: Optional[taskstatus_enum.TaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskStatus' }})
    task_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskStatusReason' }})
    text_type: Optional[texttype_enum.TextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextType' }})
    voice_id: Optional[voiceid_enum.VoiceIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceId' }})
    
