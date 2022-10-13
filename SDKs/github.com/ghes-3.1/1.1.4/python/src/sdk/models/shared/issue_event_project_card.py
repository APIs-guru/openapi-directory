from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssueEventProjectCard:
    column_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    previous_column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_column_name' }})
    project_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_id' }})
    project_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_url' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
