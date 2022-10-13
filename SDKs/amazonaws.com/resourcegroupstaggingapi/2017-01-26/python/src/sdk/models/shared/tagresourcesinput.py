from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagResourcesInput:
    resource_arn_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARNList' }})
    tags: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
