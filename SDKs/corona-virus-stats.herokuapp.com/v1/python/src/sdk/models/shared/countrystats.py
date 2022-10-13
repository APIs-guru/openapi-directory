from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CountryStats:
    active_cases: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_cases' }})
    cases_per_mill_pop: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cases_per_mill_pop' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    flag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag' }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_update', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    new_cases: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_cases' }})
    new_deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_deaths' }})
    serious_critical: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serious_critical' }})
    total_cases: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_cases' }})
    total_deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_deaths' }})
    total_recovered: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_recovered' }})
    
