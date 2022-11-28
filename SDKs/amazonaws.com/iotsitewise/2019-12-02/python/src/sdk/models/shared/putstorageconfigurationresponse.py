from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutStorageConfigurationResponse:
    configuration_status: ConfigurationStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationStatus') }})
    storage_type: StorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    multi_layer_storage: Optional[MultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiLayerStorage') }})
    
