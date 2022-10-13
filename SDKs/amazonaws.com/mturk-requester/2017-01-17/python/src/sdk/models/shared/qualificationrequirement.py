from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hitaccessactions_enum
from . import comparator_enum
from . import locale


@dataclass_json
@dataclass
class QualificationRequirement:
    actions_guarded: Optional[hitaccessactions_enum.HitAccessActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionsGuarded' }})
    comparator: comparator_enum.ComparatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comparator' }})
    integer_values: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegerValues' }})
    locale_values: Optional[List[locale.Locale]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocaleValues' }})
    qualification_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    required_to_preview: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiredToPreview' }})
    
