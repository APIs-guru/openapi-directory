from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CriteriaTargeting:
    r"""CriteriaTargeting
    Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
    """
    
    excluded_criteria_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedCriteriaIds') }})
    targeted_criteria_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetedCriteriaIds') }})
    
