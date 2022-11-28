from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QualificationRequirement:
    r"""QualificationRequirement
     The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results. 
    """
    
    comparator: ComparatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comparator') }})
    qualification_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    actions_guarded: Optional[HitAccessActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionsGuarded') }})
    integer_values: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerValues') }})
    locale_values: Optional[List[Locale]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocaleValues') }})
    required_to_preview: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredToPreview') }})
    
