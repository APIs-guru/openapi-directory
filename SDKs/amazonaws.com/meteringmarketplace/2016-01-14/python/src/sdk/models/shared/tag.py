from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    Metadata assigned to an allocation. Each tag is made up of a key and a value.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
