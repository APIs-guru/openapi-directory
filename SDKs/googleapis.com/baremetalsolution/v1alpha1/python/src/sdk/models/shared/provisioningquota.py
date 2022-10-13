from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instancequota


@dataclass_json
@dataclass
class ProvisioningQuota:
    instance_quota: Optional[instancequota.InstanceQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceQuota' }})
    
