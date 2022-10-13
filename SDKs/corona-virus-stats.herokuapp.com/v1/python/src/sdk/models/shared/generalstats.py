from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeneralStats:
    cases_with_outcome: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cases_with_outcome' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    critical_condition_active_cases: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'critical_condition_active_cases' }})
    currently_infected: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currently_infected' }})
    death_cases: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'death_cases' }})
    death_closed_cases: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'death_closed_cases' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_update', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mild_condition_active_cases: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mild_condition_active_cases' }})
    recovered_closed_cases: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recovered_closed_cases' }})
    recovery_cases: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recovery_cases' }})
    total_cases: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_cases' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
