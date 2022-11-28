from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RelationalDatabaseBlueprint:
    r"""RelationalDatabaseBlueprint
    Describes a database image, or blueprint. A blueprint describes the major engine version of a database.
    """
    
    blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprintId') }})
    engine: Optional[RelationalDatabaseEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    engine_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineDescription') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineVersion') }})
    engine_version_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineVersionDescription') }})
    is_engine_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEngineDefault') }})
    
