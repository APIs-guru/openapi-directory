from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeServiceActionExecutionParametersInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    provisioned_product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    service_action_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceActionId' }})
    
