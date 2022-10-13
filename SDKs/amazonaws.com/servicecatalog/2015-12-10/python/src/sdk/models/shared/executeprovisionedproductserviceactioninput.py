from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecuteProvisionedProductServiceActionInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    execute_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecuteToken' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    provisioned_product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    service_action_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceActionId' }})
    
