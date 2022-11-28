from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Transcript:
    r"""Transcript
    Identifies the location of a transcription.
    """
    
    redacted_transcript_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactedTranscriptFileUri') }})
    transcript_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptFileUri') }})
    
