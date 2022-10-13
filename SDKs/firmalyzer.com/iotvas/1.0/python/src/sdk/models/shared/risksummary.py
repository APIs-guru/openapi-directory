from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RiskSummary:
    client_tools_risk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_tools_risk' }})
    crypto_risk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crypto_risk' }})
    kernel_risk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernel_risk' }})
    net_services_risk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_services_risk' }})
    
