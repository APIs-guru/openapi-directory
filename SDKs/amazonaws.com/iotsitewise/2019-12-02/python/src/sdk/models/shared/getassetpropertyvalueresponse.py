from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assetpropertyvalue


@dataclass_json
@dataclass
class GetAssetPropertyValueResponse:
    property_value: Optional[assetpropertyvalue.AssetPropertyValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyValue' }})
    
