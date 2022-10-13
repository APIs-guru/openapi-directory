from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pretargetingconfig


@dataclass_json
@dataclass
class PretargetingConfigList:
    items: Optional[List[pretargetingconfig.PretargetingConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
