from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountDetail:
    r"""AccountDetail
    A detailed representation of an account.
    """
    
    addons: Optional[List[Addon]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addons') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    servicepack: Optional[Servicepack] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicepack') }})
    
