from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import projectdetails


@dataclass_json
@dataclass
class DescribeProjectResult:
    details: Optional[projectdetails.ProjectDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    
