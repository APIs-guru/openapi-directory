from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAssetResponse:
    asset_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetArn') }})
    asset_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    asset_status: AssetStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    
