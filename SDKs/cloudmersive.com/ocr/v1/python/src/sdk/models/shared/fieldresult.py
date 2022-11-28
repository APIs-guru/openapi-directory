from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FieldResult:
    r"""FieldResult
    A pairing target field and actual value read from form
    """
    
    field_values: Optional[List[OcrPhotoTextElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldValues') }})
    target_field: Optional[FormFieldDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetField') }})
    
