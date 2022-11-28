from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExportProjectResult:
    r"""ExportProjectResult
     Result structure used for requests to export project configuration details. 
    """
    
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUrl') }})
    share_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareUrl') }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotId') }})
    
