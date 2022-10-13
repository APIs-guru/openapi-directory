from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import medicalcontentidentificationtype_enum
from . import languagecode_enum
from . import outputlocationtype_enum
from . import specialty_enum
from . import transcriptionjobstatus_enum
from . import type_enum


@dataclass_json
@dataclass
class MedicalTranscriptionJobSummary:
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_identification_type: Optional[medicalcontentidentificationtype_enum.MedicalContentIdentificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentIdentificationType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    medical_transcription_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MedicalTranscriptionJobName' }})
    output_location_type: Optional[outputlocationtype_enum.OutputLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocationType' }})
    specialty: Optional[specialty_enum.SpecialtyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Specialty' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transcription_job_status: Optional[transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobStatus' }})
    type: Optional[type_enum.TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
