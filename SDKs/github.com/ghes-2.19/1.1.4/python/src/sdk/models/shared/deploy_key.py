from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeployKey:
    r"""DeployKey
    An SSH key granting access to a single repository.
    """
    
    created_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    read_only: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
