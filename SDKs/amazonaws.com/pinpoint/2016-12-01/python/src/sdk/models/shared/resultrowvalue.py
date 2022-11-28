from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResultRowValue:
    r"""ResultRowValue
    Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
