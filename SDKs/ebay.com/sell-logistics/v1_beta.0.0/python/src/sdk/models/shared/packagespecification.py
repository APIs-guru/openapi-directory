from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PackageSpecification:
    r"""PackageSpecification
    This complex type specifies the dimensions and weight of a package.
    """
    
    dimensions: Optional[Dimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    weight: Optional[Weight] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
