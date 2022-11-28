from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActiveDirectory:
    r"""ActiveDirectory
    Active Directory information
    """
    
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_global_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isGlobalAvailable') }})
    
