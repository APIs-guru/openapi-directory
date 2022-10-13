from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datastats
from . import datatype
from . import correlatedcolumn


@dataclass_json
@dataclass
class ColumnSpec:
    data_stats: Optional[datastats.DataStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataStats' }})
    data_type: Optional[datatype.DataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    top_correlated_columns: Optional[List[correlatedcolumn.CorrelatedColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topCorrelatedColumns' }})
    
