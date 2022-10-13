from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errorproto


@dataclass_json
@dataclass
class TableDataInsertAllResponseInsertErrors:
    errors: Optional[List[errorproto.ErrorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    

@dataclass_json
@dataclass
class TableDataInsertAllResponse:
    insert_errors: Optional[List[TableDataInsertAllResponseInsertErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertErrors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
