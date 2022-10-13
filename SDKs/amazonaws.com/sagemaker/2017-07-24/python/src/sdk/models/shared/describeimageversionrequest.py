from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeImageVersionRequest:
    image_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageName' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
