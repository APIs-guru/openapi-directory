from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Slot:
    r"""Slot
    Identifies the version of a specific slot.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slot_constraint: SlotConstraintEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotConstraint') }})
    default_value_spec: Optional[SlotDefaultValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueSpec') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    obfuscation_setting: Optional[ObfuscationSettingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscationSetting') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    sample_utterances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    slot_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotType') }})
    slot_type_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeVersion') }})
    value_elicitation_prompt: Optional[Prompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueElicitationPrompt') }})
    
