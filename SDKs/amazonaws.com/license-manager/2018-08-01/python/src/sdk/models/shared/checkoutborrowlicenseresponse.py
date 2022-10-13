from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadata
from . import entitlementdata


@dataclass_json
@dataclass
class CheckoutBorrowLicenseResponse:
    checkout_metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckoutMetadata' }})
    entitlements_allowed: Optional[List[entitlementdata.EntitlementData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitlementsAllowed' }})
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expiration' }})
    issued_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuedAt' }})
    license_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    license_consumption_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConsumptionToken' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeId' }})
    signed_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignedToken' }})
    
