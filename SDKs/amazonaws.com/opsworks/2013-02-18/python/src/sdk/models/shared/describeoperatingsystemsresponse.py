from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import operatingsystem


@dataclass_json
@dataclass
class DescribeOperatingSystemsResponse:
    operating_systems: Optional[List[operatingsystem.OperatingSystem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystems' }})
    
