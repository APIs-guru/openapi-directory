from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lifecyclelastcutoverfinalized
from . import lifecyclelastcutoverinitiated
from . import lifecyclelastcutoverreverted


@dataclass_json
@dataclass
class LifeCycleLastCutover:
    finalized: Optional[lifecyclelastcutoverfinalized.LifeCycleLastCutoverFinalized] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalized' }})
    initiated: Optional[lifecyclelastcutoverinitiated.LifeCycleLastCutoverInitiated] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiated' }})
    reverted: Optional[lifecyclelastcutoverreverted.LifeCycleLastCutoverReverted] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverted' }})
    
