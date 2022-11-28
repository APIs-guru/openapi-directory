from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProvisioningArtifactInput:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    parameters: ProvisioningArtifactProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
