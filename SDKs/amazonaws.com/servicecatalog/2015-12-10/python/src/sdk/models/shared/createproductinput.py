from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProductInput:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    product_type: ProductTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductType') }})
    provisioning_artifact_parameters: ProvisioningArtifactProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactParameters') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distributor') }})
    support_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportDescription') }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportEmail') }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportUrl') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
