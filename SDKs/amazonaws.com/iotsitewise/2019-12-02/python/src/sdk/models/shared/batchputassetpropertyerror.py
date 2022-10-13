from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import batchputassetpropertyvalueerrorcode_enum
from . import timeinnanos


@dataclass_json
@dataclass
class BatchPutAssetPropertyError:
    error_code: batchputassetpropertyvalueerrorcode_enum.BatchPutAssetPropertyValueErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    timestamps: List[timeinnanos.TimeInNanos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamps' }})
    
