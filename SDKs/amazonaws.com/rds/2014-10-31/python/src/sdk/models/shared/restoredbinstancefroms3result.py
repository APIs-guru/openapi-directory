from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RestoreDbInstanceFromS3Result:
    db_instance: Optional[DbInstance] = field(default=None)
    
