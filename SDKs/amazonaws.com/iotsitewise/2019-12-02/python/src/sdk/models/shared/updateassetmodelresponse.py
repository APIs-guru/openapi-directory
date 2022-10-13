from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import assetmodelstatus


@dataclass_json
@dataclass
class UpdateAssetModelResponse:
    asset_model_status: assetmodelstatus.AssetModelStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelStatus' }})
    
