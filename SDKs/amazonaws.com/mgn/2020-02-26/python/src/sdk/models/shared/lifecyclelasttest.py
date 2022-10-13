from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lifecyclelasttestfinalized
from . import lifecyclelasttestinitiated
from . import lifecyclelasttestreverted


@dataclass_json
@dataclass
class LifeCycleLastTest:
    finalized: Optional[lifecyclelasttestfinalized.LifeCycleLastTestFinalized] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalized' }})
    initiated: Optional[lifecyclelasttestinitiated.LifeCycleLastTestInitiated] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiated' }})
    reverted: Optional[lifecyclelasttestreverted.LifeCycleLastTestReverted] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverted' }})
    
