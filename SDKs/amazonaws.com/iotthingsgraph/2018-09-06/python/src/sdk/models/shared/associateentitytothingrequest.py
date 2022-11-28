from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateEntityToThingRequest:
    entity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    thing_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceVersion') }})
    
