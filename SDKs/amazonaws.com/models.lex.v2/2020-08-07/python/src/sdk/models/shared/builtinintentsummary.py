from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BuiltInIntentSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentSignature' }})
    
