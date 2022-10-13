from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateHealthCheckRequest:
    health_check_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckArn' }})
    protection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionId' }})
    
