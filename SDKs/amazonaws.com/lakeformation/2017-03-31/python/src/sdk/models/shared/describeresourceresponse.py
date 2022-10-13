from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceinfo


@dataclass_json
@dataclass
class DescribeResourceResponse:
    resource_info: Optional[resourceinfo.ResourceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceInfo' }})
    
