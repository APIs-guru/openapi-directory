from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import transcriptionjobstatus_enum


@dataclass_json
@dataclass
class ListTranscriptionJobsRequest:
    job_name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobNameContains' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
