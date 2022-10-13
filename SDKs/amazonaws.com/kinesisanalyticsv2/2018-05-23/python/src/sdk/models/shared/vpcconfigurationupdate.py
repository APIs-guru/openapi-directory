from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VpcConfigurationUpdate:
    security_group_id_updates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIdUpdates' }})
    subnet_id_updates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIdUpdates' }})
    vpc_configuration_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfigurationId' }})
    
