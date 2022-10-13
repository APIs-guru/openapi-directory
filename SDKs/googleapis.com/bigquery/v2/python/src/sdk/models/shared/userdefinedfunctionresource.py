from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserDefinedFunctionResource:
    inline_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineCode' }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUri' }})
    
