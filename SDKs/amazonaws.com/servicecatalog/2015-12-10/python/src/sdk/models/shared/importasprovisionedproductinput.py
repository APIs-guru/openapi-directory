from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportAsProvisionedProductInput:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    physical_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhysicalId') }})
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioned_product_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductName') }})
    provisioning_artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
