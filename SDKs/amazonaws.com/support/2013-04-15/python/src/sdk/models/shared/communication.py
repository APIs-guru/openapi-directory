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
class Communication:
    r"""Communication
    A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
    """
    
    attachment_set: Optional[List[AttachmentDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentSet') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseId') }})
    submitted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedBy') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeCreated') }})
    
