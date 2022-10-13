from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import checkouttype_enum
from . import entitlementdata


@dataclass_json
@dataclass
class CheckoutLicenseRequest:
    beneficiary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Beneficiary' }})
    checkout_type: checkouttype_enum.CheckoutTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckoutType' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    entitlements: List[entitlementdata.EntitlementData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entitlements' }})
    key_fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyFingerprint' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeId' }})
    product_sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductSKU' }})
    
