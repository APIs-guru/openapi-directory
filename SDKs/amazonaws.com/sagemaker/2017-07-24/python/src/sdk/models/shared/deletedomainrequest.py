from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import retentionpolicy


@dataclass_json
@dataclass
class DeleteDomainRequest:
    domain_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    retention_policy: Optional[retentionpolicy.RetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionPolicy' }})
    
