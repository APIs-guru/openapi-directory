from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exportjobresource
from . import jobstatus_enum


@dataclass_json
@dataclass
class ExportJobResponse:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    completed_pieces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedPieces' }})
    completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDate' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    definition: exportjobresource.ExportJobResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    failed_pieces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedPieces' }})
    failures: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Failures' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    job_status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    total_failures: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalFailures' }})
    total_pieces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalPieces' }})
    total_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalProcessed' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
