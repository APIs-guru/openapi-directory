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
class HomeRegionControl:
    r"""HomeRegionControl
    A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
    """
    
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlId') }})
    home_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    requested_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target: Optional[Target] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    
