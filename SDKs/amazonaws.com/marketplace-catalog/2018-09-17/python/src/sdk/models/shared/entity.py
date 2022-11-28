from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Entity:
    r"""Entity
    An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. 
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    
