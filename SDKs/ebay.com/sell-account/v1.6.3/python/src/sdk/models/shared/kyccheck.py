from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KycCheck:
    r"""KycCheck
    This type is used to provide details about any KYC check that is applicable to the managed payments seller.
    """
    
    alert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alert') }})
    data_required: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRequired') }})
    detail_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailMessage') }})
    due_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    remedy_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remedyUrl') }})
    
