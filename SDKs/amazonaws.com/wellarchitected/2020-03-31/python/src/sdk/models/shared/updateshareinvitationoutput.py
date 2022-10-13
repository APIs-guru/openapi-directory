from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shareinvitation


@dataclass_json
@dataclass
class UpdateShareInvitationOutput:
    share_invitation: Optional[shareinvitation.ShareInvitation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareInvitation' }})
    
