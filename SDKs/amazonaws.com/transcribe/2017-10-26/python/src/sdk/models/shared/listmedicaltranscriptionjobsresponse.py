from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import medicaltranscriptionjobsummary
from . import transcriptionjobstatus_enum


@dataclass_json
@dataclass
class ListMedicalTranscriptionJobsResponse:
    medical_transcription_job_summaries: Optional[List[medicaltranscriptionjobsummary.MedicalTranscriptionJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MedicalTranscriptionJobSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
