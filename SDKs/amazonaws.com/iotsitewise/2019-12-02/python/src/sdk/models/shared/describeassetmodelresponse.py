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
class DescribeAssetModelResponse:
    asset_model_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelArn') }})
    asset_model_creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelDescription') }})
    asset_model_hierarchies: List[AssetModelHierarchy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelHierarchies') }})
    asset_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_model_last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelName') }})
    asset_model_properties: List[AssetModelProperty] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelProperties') }})
    asset_model_status: AssetModelStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelStatus') }})
    asset_model_composite_models: Optional[List[AssetModelCompositeModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelCompositeModels') }})
    
