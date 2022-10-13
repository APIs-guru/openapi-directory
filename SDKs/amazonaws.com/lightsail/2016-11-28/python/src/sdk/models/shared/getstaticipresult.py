from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import staticip


@dataclass_json
@dataclass
class GetStaticIPResult:
    static_ip: Optional[staticip.StaticIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticIp' }})
    
