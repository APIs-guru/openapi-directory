from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import property
from . import compositemodelproperty


@dataclass_json
@dataclass
class DescribeAssetPropertyResponse:
    asset_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetId' }})
    asset_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelId' }})
    asset_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetName' }})
    asset_property: Optional[property.Property] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetProperty' }})
    composite_model: Optional[compositemodelproperty.CompositeModelProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compositeModel' }})
    
