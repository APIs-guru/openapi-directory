from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import retentionaction_enum
from . import foldername_enum


@dataclass_json
@dataclass
class FolderConfiguration:
    action: retentionaction_enum.RetentionActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    name: foldername_enum.FolderNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Period' }})
    
