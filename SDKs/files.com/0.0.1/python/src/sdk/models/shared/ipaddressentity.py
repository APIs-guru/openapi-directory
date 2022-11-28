from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPAddressEntity:
    r"""IPAddressEntity
    List IP Addresses associated with the current site
    """
    
    associated_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associated_with') }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    
