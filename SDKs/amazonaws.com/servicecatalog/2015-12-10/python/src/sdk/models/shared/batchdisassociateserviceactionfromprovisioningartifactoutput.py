from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedserviceactionassociation


@dataclass_json
@dataclass
class BatchDisassociateServiceActionFromProvisioningArtifactOutput:
    failed_service_action_associations: Optional[List[failedserviceactionassociation.FailedServiceActionAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedServiceActionAssociations' }})
    
