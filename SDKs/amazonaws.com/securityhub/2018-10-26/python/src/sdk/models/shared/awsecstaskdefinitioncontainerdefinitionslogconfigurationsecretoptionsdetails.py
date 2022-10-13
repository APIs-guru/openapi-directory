from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueFrom' }})
    
