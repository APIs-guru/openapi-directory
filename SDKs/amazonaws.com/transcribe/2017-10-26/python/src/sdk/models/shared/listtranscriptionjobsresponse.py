from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import transcriptionjobstatus_enum
from . import transcriptionjobsummary


@dataclass_json
@dataclass
class ListTranscriptionJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    transcription_job_summaries: Optional[List[transcriptionjobsummary.TranscriptionJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptionJobSummaries' }})
    
