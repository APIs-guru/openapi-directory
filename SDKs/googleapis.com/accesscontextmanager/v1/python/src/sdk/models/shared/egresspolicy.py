from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import egressfrom
from . import egressto


@dataclass_json
@dataclass
class EgressPolicy:
    egress_from: Optional[egressfrom.EgressFrom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressFrom' }})
    egress_to: Optional[egressto.EgressTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressTo' }})
    
