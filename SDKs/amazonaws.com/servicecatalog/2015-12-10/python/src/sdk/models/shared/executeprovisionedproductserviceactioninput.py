from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecuteProvisionedProductServiceActionInput:
    execute_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteToken') }})
    provisioned_product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductId') }})
    service_action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
