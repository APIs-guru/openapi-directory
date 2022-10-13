from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigtablecolumnfamily


@dataclass_json
@dataclass
class BigtableOptions:
    column_families: Optional[List[bigtablecolumnfamily.BigtableColumnFamily]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnFamilies' }})
    ignore_unspecified_column_families: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreUnspecifiedColumnFamilies' }})
    read_rowkey_as_string: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readRowkeyAsString' }})
    
