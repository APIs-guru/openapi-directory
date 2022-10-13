from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GrantConstraints:
    encryption_context_equals: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionContextEquals' }})
    encryption_context_subset: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionContextSubset' }})
    
