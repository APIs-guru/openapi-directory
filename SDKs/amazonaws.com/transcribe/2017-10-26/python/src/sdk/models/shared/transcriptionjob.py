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
class TranscriptionJob:
    r"""TranscriptionJob
    Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. 
    """
    
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_redaction: Optional[ContentRedaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentRedaction') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    identified_language_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifiedLanguageScore') }})
    identify_language: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifyLanguage') }})
    job_execution_settings: Optional[JobExecutionSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobExecutionSettings') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    language_options: Optional[List[LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageOptions') }})
    media: Optional[Media] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    media_format: Optional[MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    model_settings: Optional[ModelSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSettings') }})
    settings: Optional[Settings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subtitles: Optional[SubtitlesOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subtitles') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    transcript: Optional[Transcript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    transcription_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobName') }})
    transcription_job_status: Optional[TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobStatus') }})
    
