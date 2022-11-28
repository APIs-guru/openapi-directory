from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    This complex type identifies an eBay user.
    """
    
    masked_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskedUsername') }})
    
