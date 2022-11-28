from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DissociateEntityFromThingRequest:
    entity_type: EntityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    thing_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    
