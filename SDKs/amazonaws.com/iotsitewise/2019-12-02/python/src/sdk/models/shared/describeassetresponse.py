from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAssetResponse:
    asset_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetArn') }})
    asset_creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_hierarchies: List[AssetHierarchy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetHierarchies') }})
    asset_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    asset_last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetName') }})
    asset_properties: List[AssetProperty] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetProperties') }})
    asset_status: AssetStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    asset_composite_models: Optional[List[AssetCompositeModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetCompositeModels') }})
    
