from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PorterAuthor:
    r"""PorterAuthor
    Porter Author
    """
    
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    import_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    remote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_id') }})
    remote_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
