from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import assetstatus


@dataclass_json
@dataclass
class DeleteAssetResponse:
    asset_status: assetstatus.AssetStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetStatus' }})
    
