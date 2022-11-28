from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssumedRole:
    r"""AssumedRole
    Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API.
    """
    
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    session_context: Optional[SessionContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionContext') }})
    
