from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import checkouttype_enum
from . import entitlementdata


@dataclass_json
@dataclass
class CheckoutLicenseResponse:
    checkout_type: Optional[checkouttype_enum.CheckoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckoutType' }})
    entitlements_allowed: Optional[List[entitlementdata.EntitlementData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitlementsAllowed' }})
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expiration' }})
    issued_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuedAt' }})
    license_consumption_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConsumptionToken' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeId' }})
    signed_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignedToken' }})
    
