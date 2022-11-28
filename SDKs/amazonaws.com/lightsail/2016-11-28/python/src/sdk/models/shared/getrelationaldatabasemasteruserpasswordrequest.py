from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetRelationalDatabaseMasterUserPasswordRequest:
    relational_database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    password_version: Optional[RelationalDatabasePasswordVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordVersion') }})
    
