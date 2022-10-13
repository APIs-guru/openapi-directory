from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shareinvitationsummary


@dataclass_json
@dataclass
class ListShareInvitationsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    share_invitation_summaries: Optional[List[shareinvitationsummary.ShareInvitationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareInvitationSummaries' }})
    
