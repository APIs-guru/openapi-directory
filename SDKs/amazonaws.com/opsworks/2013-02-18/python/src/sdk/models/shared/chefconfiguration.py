from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChefConfiguration:
    berkshelf_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BerkshelfVersion' }})
    manage_berkshelf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManageBerkshelf' }})
    
