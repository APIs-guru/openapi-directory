from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetChanges:
    change_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_set_id') }})
    changed_assets: Optional[List[ChangedAssetDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_assets') }})
    
