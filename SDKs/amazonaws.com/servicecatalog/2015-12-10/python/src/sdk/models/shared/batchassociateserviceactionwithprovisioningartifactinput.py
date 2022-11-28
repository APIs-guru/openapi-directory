from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAssociateServiceActionWithProvisioningArtifactInput:
    service_action_associations: List[ServiceActionAssociation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionAssociations') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
