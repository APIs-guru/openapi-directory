from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import assetmodelstatus


@dataclass_json
@dataclass
class CreateAssetModelResponse:
    asset_model_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelArn' }})
    asset_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelId' }})
    asset_model_status: assetmodelstatus.AssetModelStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelStatus' }})
    
