from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V2BrowserKeyRestrictions:
    r"""V2BrowserKeyRestrictions
    The HTTP referrers (websites) that are allowed to use the key.
    """
    
    allowed_referrers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedReferrers') }})
    
