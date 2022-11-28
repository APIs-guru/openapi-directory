from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TerminateProvisionedProductInput:
    terminate_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminateToken') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    ignore_errors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreErrors') }})
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductId') }})
    provisioned_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductName') }})
    retain_physical_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainPhysicalResources') }})
    
