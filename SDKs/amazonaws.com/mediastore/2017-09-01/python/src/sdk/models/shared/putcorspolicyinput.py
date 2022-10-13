from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import corsrule


@dataclass_json
@dataclass
class PutCorsPolicyInput:
    container_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerName' }})
    cors_policy: List[corsrule.CorsRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CorsPolicy' }})
    
