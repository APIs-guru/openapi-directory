from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttributeValueList:
    r"""AttributeValueList
    Use the AttributeValueList to filter by string or integer values.
    """
    
    integer_values: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValues') }})
    string_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValues') }})
    
