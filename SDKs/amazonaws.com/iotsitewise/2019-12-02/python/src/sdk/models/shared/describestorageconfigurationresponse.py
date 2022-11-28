from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeStorageConfigurationResponse:
    configuration_status: ConfigurationStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationStatus') }})
    storage_type: StorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    last_update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    multi_layer_storage: Optional[MultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiLayerStorage') }})
    
