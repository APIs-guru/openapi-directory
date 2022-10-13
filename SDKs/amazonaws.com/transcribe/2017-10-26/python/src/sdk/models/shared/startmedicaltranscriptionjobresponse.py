from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import medicaltranscriptionjob


@dataclass_json
@dataclass
class StartMedicalTranscriptionJobResponse:
    medical_transcription_job: Optional[medicaltranscriptionjob.MedicalTranscriptionJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MedicalTranscriptionJob' }})
    
