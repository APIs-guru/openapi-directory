from dataclasses import dataclass, field
from typing import Enum

class RemoteManagementEnum(str, Enum):
    INSTALLED_ONLY = "INSTALLED_ONLY"
    INSTALLED_AUTOSTART = "INSTALLED_AUTOSTART"

