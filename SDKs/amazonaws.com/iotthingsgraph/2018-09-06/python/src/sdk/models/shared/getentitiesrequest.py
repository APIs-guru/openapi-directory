from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetEntitiesRequest:
    ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceVersion') }})
    
