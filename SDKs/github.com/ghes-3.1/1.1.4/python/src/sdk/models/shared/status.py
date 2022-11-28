from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Status:
    r"""Status
    The status of a commit.
    """
    
    avatar_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    context: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    creator: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    target_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    updated_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
