from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPageAngleResult:
    r"""GetPageAngleResult
    Result of performing a get-page-angle operation
    """
    
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Angle') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
