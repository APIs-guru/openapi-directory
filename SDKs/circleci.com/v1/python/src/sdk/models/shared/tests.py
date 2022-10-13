from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class TestsTests:
    classname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classname' }})
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    run_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_time' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass_json
@dataclass
class Tests:
    tests: Optional[List[TestsTests]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tests' }})
    
