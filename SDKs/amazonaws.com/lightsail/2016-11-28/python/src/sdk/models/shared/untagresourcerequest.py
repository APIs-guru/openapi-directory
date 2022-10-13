from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UntagResourceRequest:
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    tag_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKeys' }})
    
