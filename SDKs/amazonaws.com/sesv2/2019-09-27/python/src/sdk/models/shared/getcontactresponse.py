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
class GetContactResponse:
    attributes_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesData') }})
    contact_list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListName') }})
    created_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    last_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    topic_default_preferences: Optional[List[TopicPreference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicDefaultPreferences') }})
    topic_preferences: Optional[List[TopicPreference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicPreferences') }})
    unsubscribe_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnsubscribeAll') }})
    
