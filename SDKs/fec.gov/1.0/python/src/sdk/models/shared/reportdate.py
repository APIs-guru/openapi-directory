from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportDate:
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    report_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type_full' }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_year' }})
    update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
