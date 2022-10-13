from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegionalPriceMigrationConfig:
    oldest_allowed_price_version_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldestAllowedPriceVersionTime' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
