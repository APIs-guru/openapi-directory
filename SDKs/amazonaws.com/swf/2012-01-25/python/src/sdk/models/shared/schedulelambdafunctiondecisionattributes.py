from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleLambdaFunctionDecisionAttributes:
    r"""ScheduleLambdaFunctionDecisionAttributes
    Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startToCloseTimeout') }})
    
