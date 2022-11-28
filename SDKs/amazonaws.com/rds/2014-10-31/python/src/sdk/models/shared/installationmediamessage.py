from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InstallationMediaMessage:
    installation_media: Optional[List[InstallationMedia]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
