from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyDbProxyResponse:
    db_proxy: Optional[DbProxy] = field(default=None)
    
