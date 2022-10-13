from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TerminateProvisionedProductInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    ignore_errors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreErrors' }})
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    provisioned_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    retain_physical_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetainPhysicalResources' }})
    terminate_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminateToken' }})
    
