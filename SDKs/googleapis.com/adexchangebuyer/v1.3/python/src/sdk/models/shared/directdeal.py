from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectDeal:
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiser' }})
    allows_alcohol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsAlcohol' }})
    buyer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerAccountId' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    deal_tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealTier' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    fixed_cpm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedCpm' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_exchange_min_cpm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateExchangeMinCpm' }})
    publisher_blocks_overriden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherBlocksOverriden' }})
    seller_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerNetwork' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
