from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThreadSubject:
    latest_comment_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_comment_url') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Thread:
    r"""Thread
    Thread
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_read_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_at') }})
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    repository: MinimalRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    subject: ThreadSubject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subscription_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_url') }})
    unread: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread') }})
    updated_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
