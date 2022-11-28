from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAssetPropertyResponse:
    asset_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    asset_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetName') }})
    asset_property: Optional[Property] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetProperty') }})
    composite_model: Optional[CompositeModelProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeModel') }})
    
