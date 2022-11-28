from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrustedAdvisorResourceDetail:
    r"""TrustedAdvisorResourceDetail
    Contains information about a resource identified by a Trusted Advisor check.
    """
    
    metadata: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    is_suppressed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSuppressed') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
