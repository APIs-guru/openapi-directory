from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Buyer:
    r"""Buyer
    This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date.
    """
    
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
