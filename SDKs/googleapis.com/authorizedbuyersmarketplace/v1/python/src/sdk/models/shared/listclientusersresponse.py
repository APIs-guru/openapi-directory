from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListClientUsersResponse:
    r"""ListClientUsersResponse
    Response message for the list method.
    """
    
    client_users: Optional[List[ClientUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientUsers') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
