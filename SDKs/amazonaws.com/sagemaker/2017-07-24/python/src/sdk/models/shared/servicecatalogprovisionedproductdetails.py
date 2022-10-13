from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceCatalogProvisionedProductDetails:
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    provisioned_product_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductStatusMessage' }})
    
