from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MembersHasMember:
    r"""MembersHasMember
    JSON template for Has Member response in Directory API.
    """
    
    is_member: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMember') }})
    
