from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import holiday
from . import holiday

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
    id: Optional[ProvinceIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name_en: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameEn' }})
    name_fr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameFr' }})
    next_holiday: Optional[holiday.Holiday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextHoliday' }})
    provinces: Optional[List[holiday.Holiday]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provinces' }})
    
