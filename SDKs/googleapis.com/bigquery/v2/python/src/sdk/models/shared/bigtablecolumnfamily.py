from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigtablecolumn


@dataclass_json
@dataclass
class BigtableColumnFamily:
    columns: Optional[List[bigtablecolumn.BigtableColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    family_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyId' }})
    only_read_latest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlyReadLatest' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
