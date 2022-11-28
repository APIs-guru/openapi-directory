from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FulfillmentCodeHookSettings:
    r"""FulfillmentCodeHookSettings
    Determines if a Lambda function should be invoked for a specific intent.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
