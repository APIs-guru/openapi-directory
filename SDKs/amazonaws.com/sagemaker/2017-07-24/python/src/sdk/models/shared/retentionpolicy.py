from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import retentiontype_enum


@dataclass_json
@dataclass
class RetentionPolicy:
    home_efs_file_system: Optional[retentiontype_enum.RetentionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeEfsFileSystem' }})
    
