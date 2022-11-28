from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StandardsSubscriptionRequest:
    r"""StandardsSubscriptionRequest
    The standard that you want to enable.
    """
    
    standards_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsArn') }})
    standards_input: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsInput') }})
    
