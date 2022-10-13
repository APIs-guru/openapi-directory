from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metadata
from . import digitalsignaturemethod_enum
from . import entitlementdata


@dataclass_json
@dataclass
class CheckoutBorrowLicenseRequest:
    checkout_metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckoutMetadata' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    digital_signature_method: digitalsignaturemethod_enum.DigitalSignatureMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalSignatureMethod' }})
    entitlements: List[entitlementdata.EntitlementData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entitlements' }})
    license_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeId' }})
    
