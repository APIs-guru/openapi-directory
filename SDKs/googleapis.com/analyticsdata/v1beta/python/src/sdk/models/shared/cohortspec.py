from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cohortreportsettings
from . import cohort
from . import cohortsrange


@dataclass_json
@dataclass
class CohortSpec:
    cohort_report_settings: Optional[cohortreportsettings.CohortReportSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cohortReportSettings' }})
    cohorts: Optional[List[cohort.Cohort]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cohorts' }})
    cohorts_range: Optional[cohortsrange.CohortsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cohortsRange' }})
    
