from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountTreeResponse:
    r"""AccountTreeResponse
    JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
    """
    
    account: Optional[Account] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile: Optional[Profile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    webproperty: Optional[Webproperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webproperty') }})
    
