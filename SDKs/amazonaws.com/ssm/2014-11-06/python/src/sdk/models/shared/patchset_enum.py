from dataclasses import dataclass, field
from typing import Enum

class PatchSetEnum(str, Enum):
    OS = "OS"
    APPLICATION = "APPLICATION"

