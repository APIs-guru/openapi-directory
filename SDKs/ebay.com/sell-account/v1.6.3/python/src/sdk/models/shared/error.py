from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errorparameter


@dataclass_json
@dataclass
class Error:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    error_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorId' }})
    input_ref_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputRefIds' }})
    long_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longMessage' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    output_ref_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputRefIds' }})
    parameters: Optional[List[errorparameter.ErrorParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdomain' }})
    
