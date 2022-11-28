from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseAccount:
    r"""EnterpriseAccount
    A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
    """
    
    account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountEmail') }})
    
