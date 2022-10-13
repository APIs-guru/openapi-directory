from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoadBalancerTLSCertificateSummary:
    is_attached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAttached' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
