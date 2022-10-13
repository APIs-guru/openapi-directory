from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import randomsplitentry


@dataclass_json
@dataclass
class RandomSplitActivity:
    branches: Optional[List[randomsplitentry.RandomSplitEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Branches' }})
    
