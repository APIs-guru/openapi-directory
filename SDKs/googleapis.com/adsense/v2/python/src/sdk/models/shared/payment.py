from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Payment:
    r"""Payment
    Representation of an unpaid or paid payment. See [Payment timelines for AdSense](https://support.google.com/adsense/answer/7164703) for more information about payments and the [YouTube homepage and payments account](https://support.google.com/adsense/answer/11622510) article for information about dedicated payments accounts for YouTube.
    """
    
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
