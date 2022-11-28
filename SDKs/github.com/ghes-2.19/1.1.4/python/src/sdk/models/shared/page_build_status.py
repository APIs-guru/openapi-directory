from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PageBuildStatus:
    r"""PageBuildStatus
    Page Build Status
    """
    
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
