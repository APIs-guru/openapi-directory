from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import medicalcontentidentificationtype_enum
from . import languagecode_enum
from . import media
from . import mediaformat_enum
from . import medicaltranscriptionsetting
from . import specialty_enum
from . import tag
from . import medicaltranscript
from . import transcriptionjobstatus_enum
from . import type_enum


@dataclass_json
@dataclass
class MedicalTranscriptionJob:
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_identification_type: Optional[medicalcontentidentificationtype_enum.MedicalContentIdentificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentIdentificationType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    media: Optional[media.Media] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Media' }})
    media_format: Optional[mediaformat_enum.MediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaFormat' }})
    media_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSampleRateHertz' }})
    medical_transcription_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MedicalTranscriptionJobName' }})
    settings: Optional[medicaltranscriptionsetting.MedicalTranscriptionSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    specialty: Optional[specialty_enum.SpecialtyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Specialty' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    transcript: Optional[medicaltranscript.MedicalTranscript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transcript' }})
    transcription_job_status: Optional[transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobStatus' }})
    type: Optional[type_enum.TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
