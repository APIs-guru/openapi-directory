from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lftagerror


@dataclass_json
@dataclass
class AddLfTagsToResourceResponse:
    failures: Optional[List[lftagerror.LfTagError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Failures' }})
    
