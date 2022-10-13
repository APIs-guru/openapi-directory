from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceactionassociation


@dataclass_json
@dataclass
class BatchAssociateServiceActionWithProvisioningArtifactInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    service_action_associations: List[serviceactionassociation.ServiceActionAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceActionAssociations' }})
    
