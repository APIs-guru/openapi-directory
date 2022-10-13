from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tlspolicy_enum


@dataclass_json
@dataclass
class DeliveryOptions:
    sending_pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingPoolName' }})
    tls_policy: Optional[tlspolicy_enum.TLSPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TlsPolicy' }})
    
