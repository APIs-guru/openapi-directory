from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import storageunit_enum


@dataclass_json
@dataclass
class NfsOnDeviceServiceConfiguration:
    storage_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageLimit' }})
    storage_unit: Optional[storageunit_enum.StorageUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageUnit' }})
    
