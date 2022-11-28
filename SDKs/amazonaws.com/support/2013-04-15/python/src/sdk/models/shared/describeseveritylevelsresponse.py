from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeSeverityLevelsResponse:
    r"""DescribeSeverityLevelsResponse
    The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
    """
    
    severity_levels: Optional[List[SeverityLevel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityLevels') }})
    
