from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Transcript:
    redacted_transcript_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedactedTranscriptFileUri' }})
    transcript_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptFileUri' }})
    
