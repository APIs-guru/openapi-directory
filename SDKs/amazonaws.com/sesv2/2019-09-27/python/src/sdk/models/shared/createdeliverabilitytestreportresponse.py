from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import deliverabilityteststatus_enum


@dataclass_json
@dataclass
class CreateDeliverabilityTestReportResponse:
    deliverability_test_status: deliverabilityteststatus_enum.DeliverabilityTestStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliverabilityTestStatus' }})
    report_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportId' }})
    
