from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchputassetpropertyerror


@dataclass_json
@dataclass
class BatchPutAssetPropertyErrorEntry:
    entry_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryId' }})
    errors: List[batchputassetpropertyerror.BatchPutAssetPropertyError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
