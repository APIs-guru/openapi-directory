from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessControlAttributeValue:
    r"""AccessControlAttributeValue
    The value used for mapping a specified attribute to an identity source.
    """
    
    source: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    
