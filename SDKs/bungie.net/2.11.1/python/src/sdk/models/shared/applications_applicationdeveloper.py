from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplicationsApplicationDeveloper:
    api_eula_version: Optional[int] = field(default=None)
    role: Optional[int] = field(default=None)
    user: Optional[UserUserInfoCard] = field(default=None)
    
