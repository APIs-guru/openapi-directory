from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagCommit:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Tag:
    r"""Tag
    Tag
    """
    
    commit: TagCommit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    tarball_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tarball_url') }})
    zipball_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipball_url') }})
    
