from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrustedAdvisorCheckDescription:
    r"""TrustedAdvisorCheckDescription
    The description and metadata for a Trusted Advisor check.
    """
    
    category: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
