from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisionedproductdetail


@dataclass_json
@dataclass
class ScanProvisionedProductsOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    provisioned_products: Optional[List[provisionedproductdetail.ProvisionedProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProducts' }})
    
