from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobmetadata
from . import jobmetadata


@dataclass_json
@dataclass
class DescribeJobResult:
    job_metadata: Optional[jobmetadata.JobMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobMetadata' }})
    sub_job_metadata: Optional[List[jobmetadata.JobMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubJobMetadata' }})
    
