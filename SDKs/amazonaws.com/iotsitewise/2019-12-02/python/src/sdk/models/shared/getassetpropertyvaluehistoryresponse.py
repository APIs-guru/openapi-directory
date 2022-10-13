from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetpropertyvalue


@dataclass_json
@dataclass
class GetAssetPropertyValueHistoryResponse:
    asset_property_value_history: List[assetpropertyvalue.AssetPropertyValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetPropertyValueHistory' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
