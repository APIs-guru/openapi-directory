from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deliverabilityteststatus_enum


@dataclass_json
@dataclass
class DeliverabilityTestReport:
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deliverability_test_status: Optional[deliverabilityteststatus_enum.DeliverabilityTestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliverabilityTestStatus' }})
    from_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromEmailAddress' }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportId' }})
    report_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportName' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
