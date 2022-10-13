from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import domaintransferability


@dataclass_json
@dataclass
class CheckDomainTransferabilityResponse:
    transferability: domaintransferability.DomainTransferability = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transferability' }})
    
