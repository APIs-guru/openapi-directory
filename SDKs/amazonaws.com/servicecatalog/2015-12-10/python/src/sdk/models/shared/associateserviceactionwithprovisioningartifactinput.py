from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateServiceActionWithProvisioningArtifactInput:
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioning_artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    service_action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
