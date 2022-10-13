from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PresidentialCoverage:
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    coverage_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_year' }})
    
