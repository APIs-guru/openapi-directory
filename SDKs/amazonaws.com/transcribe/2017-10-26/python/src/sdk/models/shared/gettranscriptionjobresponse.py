from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transcriptionjob


@dataclass_json
@dataclass
class GetTranscriptionJobResponse:
    transcription_job: Optional[transcriptionjob.TranscriptionJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJob' }})
    
