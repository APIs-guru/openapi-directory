from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableDataInsertAllRequestRows:
    insert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertId') }})
    json: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json') }})
    

@dataclass_json
@dataclass
class TableDataInsertAllRequest:
    ignore_unknown_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreUnknownValues') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rows: Optional[List[TableDataInsertAllRequestRows]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    skip_invalid_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipInvalidRows') }})
    template_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateSuffix') }})
    
