from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contentredaction
from . import languagecode_enum
from . import modelsettings
from . import outputlocationtype_enum
from . import transcriptionjobstatus_enum


@dataclass_json
@dataclass
class TranscriptionJobSummary:
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_redaction: Optional[contentredaction.ContentRedaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentRedaction' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    identified_language_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentifiedLanguageScore' }})
    identify_language: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentifyLanguage' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    model_settings: Optional[modelsettings.ModelSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelSettings' }})
    output_location_type: Optional[outputlocationtype_enum.OutputLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocationType' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transcription_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobName' }})
    transcription_job_status: Optional[transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobStatus' }})
    
