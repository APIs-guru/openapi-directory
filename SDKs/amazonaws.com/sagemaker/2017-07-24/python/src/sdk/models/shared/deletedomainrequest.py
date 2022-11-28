from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteDomainRequest:
    domain_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainId') }})
    retention_policy: Optional[RetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPolicy') }})
    
