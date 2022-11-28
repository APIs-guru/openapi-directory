from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnnotationValue:
    r"""AnnotationValue
    Value of a segment annotation. Has one of three value types: Number, Boolean, or String.
    """
    
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BooleanValue') }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValue') }})
    
