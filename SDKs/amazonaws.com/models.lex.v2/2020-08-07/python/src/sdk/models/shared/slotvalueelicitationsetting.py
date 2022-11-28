from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotValueElicitationSetting:
    r"""SlotValueElicitationSetting
    Settings that you can use for eliciting a slot value.
    """
    
    slot_constraint: SlotConstraintEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotConstraint') }})
    default_value_specification: Optional[SlotDefaultValueSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueSpecification') }})
    prompt_specification: Optional[PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    sample_utterances: Optional[List[SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    wait_and_continue_specification: Optional[WaitAndContinueSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitAndContinueSpecification') }})
    
