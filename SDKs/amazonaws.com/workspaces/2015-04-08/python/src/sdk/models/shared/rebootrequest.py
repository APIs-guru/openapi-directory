from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RebootRequest:
    r"""RebootRequest
    Describes the information used to reboot a WorkSpace.
    """
    
    workspace_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceId') }})
    
