from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RdsDatabase:
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    instance_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIdentifier' }})
    
