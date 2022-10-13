from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisableAwsServiceAccessRequest:
    service_principal: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServicePrincipal' }})
    
