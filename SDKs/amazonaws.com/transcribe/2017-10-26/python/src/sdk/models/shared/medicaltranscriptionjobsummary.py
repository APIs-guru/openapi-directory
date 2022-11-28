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
class MedicalTranscriptionJobSummary:
    r"""MedicalTranscriptionJobSummary
    Provides summary information about a transcription job.
    """
    
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_identification_type: Optional[MedicalContentIdentificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentIdentificationType') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    medical_transcription_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedicalTranscriptionJobName') }})
    output_location_type: Optional[OutputLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocationType') }})
    specialty: Optional[SpecialtyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Specialty') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transcription_job_status: Optional[TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobStatus') }})
    type: Optional[TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
