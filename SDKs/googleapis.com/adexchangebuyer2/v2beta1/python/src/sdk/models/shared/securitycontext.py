from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SecurityContextSecuritiesEnum(str, Enum):
    INSECURE = "INSECURE"
    SSL = "SSL"


@dataclass_json
@dataclass
class SecurityContext:
    r"""SecurityContext
    Output only. A security context.
    """
    
    securities: Optional[List[SecurityContextSecuritiesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securities') }})
    
