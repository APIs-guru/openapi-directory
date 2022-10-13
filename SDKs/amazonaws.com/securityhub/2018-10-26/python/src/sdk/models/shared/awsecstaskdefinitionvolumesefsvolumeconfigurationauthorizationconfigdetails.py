from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails:
    access_point_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessPointId' }})
    iam: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iam' }})
    
