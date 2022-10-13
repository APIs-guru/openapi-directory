from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import engineattribute


@dataclass_json
@dataclass
class AssociateNodeRequest:
    engine_attributes: List[engineattribute.EngineAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineAttributes' }})
    node_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeName' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
