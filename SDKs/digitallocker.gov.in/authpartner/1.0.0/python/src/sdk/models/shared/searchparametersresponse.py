from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchParametersResponse:
    example: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'example' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    paramname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paramname' }})
    valuelist: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valuelist' }})
    
