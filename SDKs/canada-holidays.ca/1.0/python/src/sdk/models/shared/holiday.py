from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HolidayFederalEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TRUE = "true"
    FALSE = "false"


@dataclass_json
@dataclass
class Holiday:
    r"""Holiday
    A Canadian holiday. Includes a name, date, and a list of regions that observe this holiday.
    """
    
    date_: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    federal: Optional[HolidayFederalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federal') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name_fr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name Fr') }})
    name_en: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameEn') }})
    provinces: Optional[List[Province]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provinces') }})
    
