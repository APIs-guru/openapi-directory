from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateWebACLRequest:
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    web_acl_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACLId') }})
    default_action: Optional[WafAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAction') }})
    updates: Optional[List[WebACLUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
