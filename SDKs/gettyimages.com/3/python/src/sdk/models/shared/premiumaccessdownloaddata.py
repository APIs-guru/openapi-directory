from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PremiumAccessDownloadData:
    download_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_notes' }})
    project_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_code' }})
    
