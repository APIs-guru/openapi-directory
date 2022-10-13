from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3TagCreateRequest:
    is_mandatory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMandatory' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
