from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OperationsLog:
    amendment_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendment_indicator') }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginning_image_number') }})
    candidate_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_committee_id') }})
    coverage_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_end_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    coverage_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_start_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ending_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ending_image_number') }})
    form_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_type') }})
    receipt_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receipt_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type') }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_year') }})
    status_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_num') }})
    sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_id') }})
    summary_data_complete_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary_data_complete_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary_data_verification_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary_data_verification_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_data_complete_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_data_complete_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
