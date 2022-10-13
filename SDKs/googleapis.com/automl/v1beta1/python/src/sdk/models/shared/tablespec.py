from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputconfig


@dataclass_json
@dataclass
class TableSpec:
    column_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnCount' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    input_configs: Optional[List[inputconfig.InputConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfigs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    time_column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeColumnSpecId' }})
    valid_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validRowCount' }})
    
