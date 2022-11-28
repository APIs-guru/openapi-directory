from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestsTests:
    classname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classname') }})
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    run_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_time') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclass
class Tests:
    tests: Optional[List[TestsTests]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tests') }})
    
