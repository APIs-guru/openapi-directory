from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import opsentityitem


@dataclass_json
@dataclass
class OpsEntity:
    data: Optional[dict[str, opsentityitem.OpsEntityItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    
