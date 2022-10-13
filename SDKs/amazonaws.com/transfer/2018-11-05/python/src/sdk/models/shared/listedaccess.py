from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import homedirectorytype_enum


@dataclass_json
@dataclass
class ListedAccess:
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    home_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeDirectory' }})
    home_directory_type: Optional[homedirectorytype_enum.HomeDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeDirectoryType' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    
