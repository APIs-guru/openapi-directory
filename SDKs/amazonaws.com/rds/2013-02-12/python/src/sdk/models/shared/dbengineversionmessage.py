from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbEngineVersionMessage:
    db_engine_versions: Optional[List[DbEngineVersion]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
