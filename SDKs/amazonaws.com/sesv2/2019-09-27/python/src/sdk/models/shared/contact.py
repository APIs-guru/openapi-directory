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
class Contact:
    r"""Contact
    A contact is the end-user who is receiving the email.
    """
    
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    last_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    topic_default_preferences: Optional[List[TopicPreference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicDefaultPreferences') }})
    topic_preferences: Optional[List[TopicPreference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicPreferences') }})
    unsubscribe_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnsubscribeAll') }})
    
