from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class DescribeHomeRegionControlsRequest:
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlId' }})
    home_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    target: Optional[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
