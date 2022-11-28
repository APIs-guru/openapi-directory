from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Dimensions:
    r"""Dimensions
    This complex type defines the dimensions of a package to be shipped.
    """
    
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
