from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OperationsLog:
    amendment_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment_indicator' }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginning_image_number' }})
    candidate_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_committee_id' }})
    coverage_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    coverage_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ending_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ending_image_number' }})
    form_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_type' }})
    receipt_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_year' }})
    status_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_num' }})
    sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_id' }})
    summary_data_complete_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary_data_complete_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary_data_verification_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary_data_verification_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_data_complete_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_data_complete_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
