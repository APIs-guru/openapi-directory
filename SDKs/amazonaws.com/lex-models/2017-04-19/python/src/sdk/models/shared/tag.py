from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. 
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
