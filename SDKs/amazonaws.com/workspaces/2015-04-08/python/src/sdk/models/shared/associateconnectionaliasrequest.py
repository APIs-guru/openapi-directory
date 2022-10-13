from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateConnectionAliasRequest:
    alias_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasId' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
