from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbEngineVersion:
    db_engine_description: Optional[str] = field(default=None)
    db_engine_version_description: Optional[str] = field(default=None)
    db_parameter_group_family: Optional[str] = field(default=None)
    default_character_set: Optional[CharacterSet] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    supported_character_sets: Optional[List[CharacterSet]] = field(default=None)
    
