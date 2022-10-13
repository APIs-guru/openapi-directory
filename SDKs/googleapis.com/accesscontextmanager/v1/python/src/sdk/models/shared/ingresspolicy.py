from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ingressfrom
from . import ingressto


@dataclass_json
@dataclass
class IngressPolicy:
    ingress_from: Optional[ingressfrom.IngressFrom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressFrom' }})
    ingress_to: Optional[ingressto.IngressTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressTo' }})
    
