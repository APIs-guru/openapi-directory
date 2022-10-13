from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAliasRequest:
    alias_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasName' }})
    target_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetKeyId' }})
    
