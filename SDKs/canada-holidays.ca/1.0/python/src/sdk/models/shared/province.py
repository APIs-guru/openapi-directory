from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProvinceIDEnum(str, Enum):
    AB = "AB"
    BC = "BC"
    MB = "MB"
    NB = "NB"
    NL = "NL"
    NS = "NS"
    NT = "NT"
    NU = "NU"
    ON = "ON"
    PE = "PE"
    QC = "QC"
    SK = "SK"
    YT = "YT"


@dataclass_json
@dataclass
class Province:
    r"""Province
    A Canadian province or territory 
    """
    
    id: Optional[ProvinceIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name_en: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameEn') }})
    name_fr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameFr') }})
    next_holiday: Optional[Holiday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextHoliday') }})
    provinces: Optional[List[Holiday]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provinces') }})
    
