from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceaccessprotocol_enum


@dataclass_json
@dataclass
class GetInstanceAccessDetailsRequest:
    instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    protocol: Optional[instanceaccessprotocol_enum.InstanceAccessProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
