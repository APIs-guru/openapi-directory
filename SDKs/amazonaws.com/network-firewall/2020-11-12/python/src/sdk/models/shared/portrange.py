from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortRange:
    from_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromPort' }})
    to_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToPort' }})
    
