from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetmodelcompositemodel
from . import assetmodelhierarchy
from . import assetmodelproperty
from . import assetmodelstatus


@dataclass_json
@dataclass
class DescribeAssetModelResponse:
    asset_model_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelArn' }})
    asset_model_composite_models: Optional[List[assetmodelcompositemodel.AssetModelCompositeModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelCompositeModels' }})
    asset_model_creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelDescription' }})
    asset_model_hierarchies: List[assetmodelhierarchy.AssetModelHierarchy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelHierarchies' }})
    asset_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelId' }})
    asset_model_last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelLastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelName' }})
    asset_model_properties: List[assetmodelproperty.AssetModelProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelProperties' }})
    asset_model_status: assetmodelstatus.AssetModelStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelStatus' }})
    
