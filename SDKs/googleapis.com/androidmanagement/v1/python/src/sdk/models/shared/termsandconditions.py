from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userfacingmessage
from . import userfacingmessage


@dataclass_json
@dataclass
class TermsAndConditions:
    content: Optional[userfacingmessage.UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    header: Optional[userfacingmessage.UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    
