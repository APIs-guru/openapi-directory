from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import standardscontrol


@dataclass_json
@dataclass
class DescribeStandardsControlsResponse:
    controls: Optional[List[standardscontrol.StandardsControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Controls' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
