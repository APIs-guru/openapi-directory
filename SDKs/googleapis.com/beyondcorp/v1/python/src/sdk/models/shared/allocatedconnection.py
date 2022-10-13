from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllocatedConnection:
    ingress_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressPort' }})
    psc_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pscUri' }})
    
