from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import protection


@dataclass_json
@dataclass
class DescribeProtectionResponse:
    protection: Optional[protection.Protection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protection' }})
    
