from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CohortSpec:
    r"""CohortSpec
    The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.
    """
    
    cohort_report_settings: Optional[CohortReportSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohortReportSettings') }})
    cohorts: Optional[List[Cohort]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohorts') }})
    cohorts_range: Optional[CohortsRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohortsRange') }})
    
