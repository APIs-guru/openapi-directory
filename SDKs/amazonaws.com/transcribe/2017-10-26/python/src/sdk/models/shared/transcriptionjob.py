from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contentredaction
from . import jobexecutionsettings
from . import languagecode_enum
from . import languagecode_enum
from . import media
from . import mediaformat_enum
from . import modelsettings
from . import settings
from . import subtitlesoutput
from . import tag
from . import transcript
from . import transcriptionjobstatus_enum


@dataclass_json
@dataclass
class TranscriptionJob:
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_redaction: Optional[contentredaction.ContentRedaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentRedaction' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    identified_language_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentifiedLanguageScore' }})
    identify_language: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentifyLanguage' }})
    job_execution_settings: Optional[jobexecutionsettings.JobExecutionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobExecutionSettings' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    language_options: Optional[List[languagecode_enum.LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageOptions' }})
    media: Optional[media.Media] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Media' }})
    media_format: Optional[mediaformat_enum.MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaFormat' }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSampleRateHertz' }})
    model_settings: Optional[modelsettings.ModelSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelSettings' }})
    settings: Optional[settings.Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subtitles: Optional[subtitlesoutput.SubtitlesOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subtitles' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    transcript: Optional[transcript.Transcript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transcript' }})
    transcription_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobName' }})
    transcription_job_status: Optional[transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobStatus' }})
    
