from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boardasset


@dataclass_json
@dataclass
class AddBoardAssetsResult:
    assets_added: Optional[List[boardasset.BoardAsset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets_added' }})
    assets_not_added: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets_not_added' }})
    
