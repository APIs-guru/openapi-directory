from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeTrustedAdvisorCheckResultRequest:
    r"""DescribeTrustedAdvisorCheckResultRequest
    <p/>
    """
    
    check_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    
