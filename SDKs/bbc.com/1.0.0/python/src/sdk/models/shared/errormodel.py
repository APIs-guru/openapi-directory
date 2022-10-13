from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorModelFaultDetail:
    errorcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorcode' }})
    

@dataclass_json
@dataclass
class ErrorModelFault:
    detail: Optional[ErrorModelFaultDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    fault_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faultString' }})
    

@dataclass_json
@dataclass
class ErrorModel:
    fault: Optional[ErrorModelFault] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fault' }})
    
