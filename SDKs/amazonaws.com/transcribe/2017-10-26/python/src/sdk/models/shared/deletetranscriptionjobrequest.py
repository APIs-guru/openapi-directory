from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteTranscriptionJobRequest:
    transcription_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobName' }})
    
