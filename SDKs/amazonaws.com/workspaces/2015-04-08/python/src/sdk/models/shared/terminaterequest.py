from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TerminateRequest:
    r"""TerminateRequest
    Describes the information used to terminate a WorkSpace.
    """
    
    workspace_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceId') }})
    
