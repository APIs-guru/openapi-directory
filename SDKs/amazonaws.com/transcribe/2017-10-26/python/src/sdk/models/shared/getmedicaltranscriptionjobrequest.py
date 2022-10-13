from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetMedicalTranscriptionJobRequest:
    medical_transcription_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MedicalTranscriptionJobName' }})
    
