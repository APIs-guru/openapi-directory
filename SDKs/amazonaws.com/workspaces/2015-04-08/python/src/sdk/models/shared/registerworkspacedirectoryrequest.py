from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import tenancy_enum


@dataclass_json
@dataclass
class RegisterWorkspaceDirectoryRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    enable_self_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSelfService' }})
    enable_work_docs: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableWorkDocs' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    tenancy: Optional[tenancy_enum.TenancyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tenancy' }})
    
