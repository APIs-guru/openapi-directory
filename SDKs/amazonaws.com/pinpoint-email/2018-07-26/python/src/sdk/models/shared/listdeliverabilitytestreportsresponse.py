from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDeliverabilityTestReportsResponse:
    r"""ListDeliverabilityTestReportsResponse
    A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
    """
    
    deliverability_test_reports: List[DeliverabilityTestReport] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliverabilityTestReports') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
