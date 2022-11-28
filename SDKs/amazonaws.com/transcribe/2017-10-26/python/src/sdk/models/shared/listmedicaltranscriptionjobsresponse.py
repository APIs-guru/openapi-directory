from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMedicalTranscriptionJobsResponse:
    medical_transcription_job_summaries: Optional[List[MedicalTranscriptionJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedicalTranscriptionJobSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
