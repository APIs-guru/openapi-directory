from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportDate:
    create_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type') }})
    report_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type_full') }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_year') }})
    update_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
