from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceActionSummary:
    r"""ServiceActionSummary
    Detailed information about the self-service action.
    """
    
    definition_type: Optional[ServiceActionDefinitionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefinitionType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
