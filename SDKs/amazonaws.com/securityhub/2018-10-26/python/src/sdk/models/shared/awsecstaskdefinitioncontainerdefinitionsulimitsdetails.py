from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails:
    hard_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HardLimit' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    soft_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SoftLimit' }})
    
