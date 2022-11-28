from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisionProductInput:
    provision_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionToken') }})
    provisioned_product_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductName') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    notification_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationArns') }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathId') }})
    path_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathName') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    provisioning_artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactName') }})
    provisioning_parameters: Optional[List[ProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningParameters') }})
    provisioning_preferences: Optional[ProvisioningPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningPreferences') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
