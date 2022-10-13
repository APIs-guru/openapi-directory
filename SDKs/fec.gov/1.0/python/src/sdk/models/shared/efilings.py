from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EFilings:
    amended_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amended_by' }})
    amendment_chain: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment_chain' }})
    amendment_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment_number' }})
    amends_file: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amends_file' }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginning_image_number' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_name' }})
    coverage_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    coverage_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    csv_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv_url' }})
    document_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_description' }})
    ending_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ending_image_number' }})
    fec_file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fec_file_id' }})
    fec_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fec_url' }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_number' }})
    filed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filed_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    form_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_type' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    is_amended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_amended' }})
    load_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    most_recent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'most_recent' }})
    most_recent_filing: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'most_recent_filing' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_url' }})
    receipt_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
