from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import relationaldatabasepasswordversion_enum


@dataclass_json
@dataclass
class GetRelationalDatabaseMasterUserPasswordRequest:
    password_version: Optional[relationaldatabasepasswordversion_enum.RelationalDatabasePasswordVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordVersion' }})
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    
