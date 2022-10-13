from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationstatus
from . import multilayerstorage
from . import storagetype_enum


@dataclass_json
@dataclass
class PutStorageConfigurationResponse:
    configuration_status: configurationstatus.ConfigurationStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationStatus' }})
    multi_layer_storage: Optional[multilayerstorage.MultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiLayerStorage' }})
    storage_type: storagetype_enum.StorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageType' }})
    
