from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitRefObject:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GitRef:
    r"""GitRef
    Git references within a repository
    """
    
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    object: GitRefObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
