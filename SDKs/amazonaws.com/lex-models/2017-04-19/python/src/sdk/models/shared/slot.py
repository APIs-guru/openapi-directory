from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import slotdefaultvaluespec
from . import obfuscationsetting_enum
from . import slotconstraint_enum
from . import prompt


@dataclass_json
@dataclass
class Slot:
    default_value_spec: Optional[slotdefaultvaluespec.SlotDefaultValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValueSpec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    obfuscation_setting: Optional[obfuscationsetting_enum.ObfuscationSettingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscationSetting' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    sample_utterances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    slot_constraint: slotconstraint_enum.SlotConstraintEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotConstraint' }})
    slot_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotType' }})
    slot_type_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeVersion' }})
    value_elicitation_prompt: Optional[prompt.Prompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueElicitationPrompt' }})
    
