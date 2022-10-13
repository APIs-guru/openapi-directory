from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import assetstatus


@dataclass_json
@dataclass
class CreateAssetResponse:
    asset_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetArn' }})
    asset_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetId' }})
    asset_status: assetstatus.AssetStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetStatus' }})
    
