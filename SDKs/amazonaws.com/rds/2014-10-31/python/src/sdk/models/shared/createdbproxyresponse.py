from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDbProxyResponse:
    db_proxy: Optional[DbProxy] = field(default=None)
    
