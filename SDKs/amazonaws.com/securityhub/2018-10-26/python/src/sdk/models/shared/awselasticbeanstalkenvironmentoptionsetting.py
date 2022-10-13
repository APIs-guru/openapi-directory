from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElasticBeanstalkEnvironmentOptionSetting:
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespace' }})
    option_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptionName' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceName' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
