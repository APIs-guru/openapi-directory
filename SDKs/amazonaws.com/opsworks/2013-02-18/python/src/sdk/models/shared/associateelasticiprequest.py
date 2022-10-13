from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateElasticIPRequest:
    elastic_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticIp' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    
