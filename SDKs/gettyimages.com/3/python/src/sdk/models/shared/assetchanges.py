from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import changedassetdetail


@dataclass_json
@dataclass
class AssetChanges:
    change_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change_set_id' }})
    changed_assets: Optional[List[changedassetdetail.ChangedAssetDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_assets' }})
    
