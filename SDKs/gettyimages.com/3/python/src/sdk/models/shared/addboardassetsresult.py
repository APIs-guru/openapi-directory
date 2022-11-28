from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddBoardAssetsResult:
    assets_added: Optional[List[BoardAsset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets_added') }})
    assets_not_added: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets_not_added') }})
    
