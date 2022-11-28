from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDeliverabilityTestReportResponse:
    r"""GetDeliverabilityTestReportResponse
    The results of the predictive inbox placement test.
    """
    
    deliverability_test_report: DeliverabilityTestReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliverabilityTestReport') }})
    isp_placements: List[IspPlacement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IspPlacements') }})
    overall_placement: PlacementStatistics = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallPlacement') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
