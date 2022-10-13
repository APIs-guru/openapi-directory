from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateModelPackageGroupInput:
    model_package_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupDescription' }})
    model_package_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
