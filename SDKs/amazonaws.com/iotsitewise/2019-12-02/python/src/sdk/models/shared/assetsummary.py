from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetSummary:
    r"""AssetSummary
    Contains a summary of an asset.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    asset_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hierarchies: List[AssetHierarchy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchies') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: AssetStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
