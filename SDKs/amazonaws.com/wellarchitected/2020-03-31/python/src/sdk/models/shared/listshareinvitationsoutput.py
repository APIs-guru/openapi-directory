from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListShareInvitationsOutput:
    r"""ListShareInvitationsOutput
    Input for List Share Invitations
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    share_invitation_summaries: Optional[List[ShareInvitationSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareInvitationSummaries') }})
    
