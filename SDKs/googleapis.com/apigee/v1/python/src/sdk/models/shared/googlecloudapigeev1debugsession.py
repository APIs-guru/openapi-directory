from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DebugSession:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    tracesize: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracesize') }})
    validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1DebugSessionInput:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    tracesize: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracesize') }})
    validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    
