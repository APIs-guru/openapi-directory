from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RefreshTrustedAdvisorCheckResponse:
    r"""RefreshTrustedAdvisorCheckResponse
    The current refresh status of a Trusted Advisor check.
    """
    
    status: TrustedAdvisorCheckRefreshStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
