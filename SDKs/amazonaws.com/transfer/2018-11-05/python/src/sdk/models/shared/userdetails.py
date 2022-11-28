from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserDetails:
    r"""UserDetails
    Specifies the user name, server ID, and session ID for a workflow.
    """
    
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionId') }})
    
