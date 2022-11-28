from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V2ServerKeyRestrictions:
    r"""V2ServerKeyRestrictions
    The IP addresses of callers that are allowed to use the key.
    """
    
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    
