from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Principal:
    r"""Principal
    Information about a principal.
    """
    
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalARN') }})
    principal_type: Optional[PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    
