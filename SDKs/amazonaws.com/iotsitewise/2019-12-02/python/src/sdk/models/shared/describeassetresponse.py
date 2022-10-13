from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetcompositemodel
from . import assethierarchy
from . import assetproperty
from . import assetstatus


@dataclass_json
@dataclass
class DescribeAssetResponse:
    asset_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetArn' }})
    asset_composite_models: Optional[List[assetcompositemodel.AssetCompositeModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetCompositeModels' }})
    asset_creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_hierarchies: List[assethierarchy.AssetHierarchy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetHierarchies' }})
    asset_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetId' }})
    asset_last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetLastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelId' }})
    asset_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetName' }})
    asset_properties: List[assetproperty.AssetProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetProperties' }})
    asset_status: assetstatus.AssetStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetStatus' }})
    
