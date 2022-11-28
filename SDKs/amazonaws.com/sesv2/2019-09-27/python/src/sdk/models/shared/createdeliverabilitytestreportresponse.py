from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDeliverabilityTestReportResponse:
    r"""CreateDeliverabilityTestReportResponse
    Information about the predictive inbox placement test that you created.
    """
    
    deliverability_test_status: DeliverabilityTestStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliverabilityTestStatus') }})
    report_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportId') }})
    
