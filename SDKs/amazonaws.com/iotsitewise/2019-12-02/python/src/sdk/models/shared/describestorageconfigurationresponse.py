from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationstatus
from . import multilayerstorage
from . import storagetype_enum


@dataclass_json
@dataclass
class DescribeStorageConfigurationResponse:
    configuration_status: configurationstatus.ConfigurationStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationStatus' }})
    last_update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    multi_layer_storage: Optional[multilayerstorage.MultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiLayerStorage' }})
    storage_type: storagetype_enum.StorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageType' }})
    
