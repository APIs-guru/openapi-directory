from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProtectionGroupArbitraryPatternLimits:
    r"""ProtectionGroupArbitraryPatternLimits
    Limits settings on protection groups with arbitrary pattern type. 
    """
    
    max_members: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxMembers') }})
    
