from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DownloadRequirements:
    is_note_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_note_required' }})
    is_project_code_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_project_code_required' }})
    project_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_codes' }})
    
