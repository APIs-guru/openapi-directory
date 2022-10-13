from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EditDomainWillRenewRequest:
    will_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'will_renew' }})
    
