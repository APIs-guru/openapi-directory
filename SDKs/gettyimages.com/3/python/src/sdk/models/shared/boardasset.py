from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoardAsset:
    asset_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_id' }})
    
