from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testingdata
from . import testingdata
from . import validationdata


@dataclass_json
@dataclass
class TestingDataResult:
    input: Optional[testingdata.TestingData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    output: Optional[testingdata.TestingData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    validation: Optional[validationdata.ValidationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validation' }})
    
