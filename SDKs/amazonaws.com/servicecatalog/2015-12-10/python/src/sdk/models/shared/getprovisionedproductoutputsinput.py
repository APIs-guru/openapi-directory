from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetProvisionedProductOutputsInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    output_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputKeys' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    provisioned_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    
