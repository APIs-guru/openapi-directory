from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LfTag:
    r"""LfTag
    A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.
    """
    
    tag_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKey') }})
    tag_values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValues') }})
    
