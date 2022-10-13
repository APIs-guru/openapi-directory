from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ingestionjobstatus_enum


@dataclass_json
@dataclass
class StartDataIngestionJobResponse:
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    status: Optional[ingestionjobstatus_enum.IngestionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
