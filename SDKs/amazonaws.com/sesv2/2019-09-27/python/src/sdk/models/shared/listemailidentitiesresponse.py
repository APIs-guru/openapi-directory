from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEmailIdentitiesResponse:
    r"""ListEmailIdentitiesResponse
    A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified.
    """
    
    email_identities: Optional[List[IdentityInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailIdentities') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
