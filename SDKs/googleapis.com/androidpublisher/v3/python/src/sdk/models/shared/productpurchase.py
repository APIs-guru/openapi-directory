from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductPurchase:
    acknowledgement_state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgementState' }})
    consumption_state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumptionState' }})
    developer_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerPayload' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    obfuscated_external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscatedExternalAccountId' }})
    obfuscated_external_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscatedExternalProfileId' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    purchase_state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseState' }})
    purchase_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseTimeMillis' }})
    purchase_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseToken' }})
    purchase_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseType' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
