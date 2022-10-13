from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortMapping:
    application_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationPort' }})
    enable_on_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableOnPublicIp' }})
    job_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobPort' }})
    
