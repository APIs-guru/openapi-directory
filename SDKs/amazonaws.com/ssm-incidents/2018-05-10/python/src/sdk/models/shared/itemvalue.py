from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemValue:
    r"""ItemValue
    Describes a related item.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    metric_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDefinition') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
