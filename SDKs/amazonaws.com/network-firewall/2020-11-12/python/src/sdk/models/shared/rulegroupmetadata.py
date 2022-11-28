from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuleGroupMetadata:
    r"""RuleGroupMetadata
    High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
