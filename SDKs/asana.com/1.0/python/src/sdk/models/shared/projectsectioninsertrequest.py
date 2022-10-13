from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProjectSectionInsertRequest:
    after_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'after_section' }})
    before_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'before_section' }})
    project: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    section: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    
