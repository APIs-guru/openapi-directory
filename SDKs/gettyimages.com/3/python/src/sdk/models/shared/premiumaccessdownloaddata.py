from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PremiumAccessDownloadData:
    download_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_notes') }})
    project_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_code') }})
    
