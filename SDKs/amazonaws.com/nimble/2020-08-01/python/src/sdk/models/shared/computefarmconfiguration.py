from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComputeFarmConfiguration:
    r"""ComputeFarmConfiguration
    The configuration for a render farm that is associated with a studio resource.
    """
    
    active_directory_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectoryUser') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    
