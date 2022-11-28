from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValueWithServiceIds:
    r"""ValueWithServiceIds
    Information about a segment annotation.
    """
    
    annotation_value: Optional[AnnotationValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnotationValue') }})
    service_ids: Optional[List[ServiceID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIds') }})
    
