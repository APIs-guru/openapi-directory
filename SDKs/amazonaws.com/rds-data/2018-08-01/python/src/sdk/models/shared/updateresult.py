from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import field


@dataclass_json
@dataclass
class UpdateResult:
    generated_fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedFields' }})
    
