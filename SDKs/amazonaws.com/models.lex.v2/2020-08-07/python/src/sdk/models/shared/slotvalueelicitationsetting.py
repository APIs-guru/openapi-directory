from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import slotdefaultvaluespecification
from . import promptspecification
from . import sampleutterance
from . import slotconstraint_enum
from . import waitandcontinuespecification


@dataclass_json
@dataclass
class SlotValueElicitationSetting:
    default_value_specification: Optional[slotdefaultvaluespecification.SlotDefaultValueSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValueSpecification' }})
    prompt_specification: Optional[promptspecification.PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promptSpecification' }})
    sample_utterances: Optional[List[sampleutterance.SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    slot_constraint: slotconstraint_enum.SlotConstraintEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotConstraint' }})
    wait_and_continue_specification: Optional[waitandcontinuespecification.WaitAndContinueSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitAndContinueSpecification' }})
    
