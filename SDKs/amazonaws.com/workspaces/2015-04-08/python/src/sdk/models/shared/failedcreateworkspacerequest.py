from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FailedCreateWorkspaceRequest:
    r"""FailedCreateWorkspaceRequest
    Describes a WorkSpace that cannot be created.
    """
    
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    workspace_request: Optional[WorkspaceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceRequest') }})
    
