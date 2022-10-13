from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import migrationalerttype_enum


@dataclass_json
@dataclass
class MigrationAlert:
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    reference_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceURLs' }})
    type: Optional[migrationalerttype_enum.MigrationAlertTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
