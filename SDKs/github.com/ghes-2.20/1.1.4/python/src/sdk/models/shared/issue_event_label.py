from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IssueEventLabel:
    r"""IssueEventLabel
    Issue Event Label
    """
    
    color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
