from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentificationHints:
    aws_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsInstanceID' }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    vm_ware_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmWareUuid' }})
    
