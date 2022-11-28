from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnumerationValue:
    r"""EnumerationValue
    <p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul>
    """
    
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    synonyms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synonyms') }})
    
