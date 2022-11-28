from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Intent:
    r"""Intent
    Identifies the specific version of an intent.
    """
    
    intent_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    intent_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentVersion') }})
    
