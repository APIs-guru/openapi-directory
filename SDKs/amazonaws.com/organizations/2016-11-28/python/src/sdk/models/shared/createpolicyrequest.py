from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import policytype_enum


@dataclass_json
@dataclass
class CreatePolicyRequest:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: policytype_enum.PolicyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
