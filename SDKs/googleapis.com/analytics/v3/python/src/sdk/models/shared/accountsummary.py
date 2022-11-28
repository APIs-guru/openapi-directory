from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountSummary:
    r"""AccountSummary
    JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred') }})
    web_properties: Optional[List[WebPropertySummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webProperties') }})
    
