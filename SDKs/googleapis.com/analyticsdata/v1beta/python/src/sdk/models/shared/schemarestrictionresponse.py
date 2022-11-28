from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchemaRestrictionResponse:
    r"""SchemaRestrictionResponse
    The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
    """
    
    active_metric_restrictions: Optional[List[ActiveMetricRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeMetricRestrictions') }})
    
