from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import basepopular
from . import basepopular


@dataclass_json
@dataclass
class PopularCars:
    new_top50: Optional[List[basepopular.BasePopular]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_top50' }})
    used_top50: Optional[List[basepopular.BasePopular]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_top50' }})
    
