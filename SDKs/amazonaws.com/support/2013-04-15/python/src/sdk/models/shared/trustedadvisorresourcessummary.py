from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrustedAdvisorResourcesSummary:
    r"""TrustedAdvisorResourcesSummary
    Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
    """
    
    resources_flagged: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesFlagged') }})
    resources_ignored: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesIgnored') }})
    resources_processed: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesProcessed') }})
    resources_suppressed: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesSuppressed') }})
    
