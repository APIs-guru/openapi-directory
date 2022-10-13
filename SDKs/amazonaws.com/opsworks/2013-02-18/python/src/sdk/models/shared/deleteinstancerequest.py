from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteInstanceRequest:
    delete_elastic_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteElasticIp' }})
    delete_volumes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteVolumes' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    
