from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SessionIssuer:
    r"""SessionIssuer
    Provides information about the source and type of temporary security credentials that were issued to an entity.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
