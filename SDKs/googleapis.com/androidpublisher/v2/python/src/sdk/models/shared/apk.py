from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Apk:
    binary: Optional[ApkBinary] = field(default=None)
    version_code: Optional[int] = field(default=None)
    
