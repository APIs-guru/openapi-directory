from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAssetModelResponse:
    asset_model_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelArn') }})
    asset_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_model_status: AssetModelStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelStatus') }})
    
