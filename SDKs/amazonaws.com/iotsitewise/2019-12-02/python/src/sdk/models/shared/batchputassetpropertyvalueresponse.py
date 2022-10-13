from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchputassetpropertyerrorentry


@dataclass_json
@dataclass
class BatchPutAssetPropertyValueResponse:
    error_entries: List[batchputassetpropertyerrorentry.BatchPutAssetPropertyErrorEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorEntries' }})
    
