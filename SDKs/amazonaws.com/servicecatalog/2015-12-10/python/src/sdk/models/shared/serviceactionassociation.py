from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceActionAssociation:
    r"""ServiceActionAssociation
    A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
    """
    
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioning_artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    service_action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionId') }})
    
