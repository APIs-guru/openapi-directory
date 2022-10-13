from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import province

class HolidayFederalEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TRUE = "true"
    FALSE = "false"


@dataclass_json
@dataclass
class Holiday:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    federal: Optional[HolidayFederalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federal' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name_fr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name Fr' }})
    name_en: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameEn' }})
    provinces: Optional[List[province.Province]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provinces' }})
    
