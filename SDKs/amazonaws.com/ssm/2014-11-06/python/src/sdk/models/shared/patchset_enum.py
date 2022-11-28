from dataclasses import dataclass, field
from enum import Enum

class PatchSetEnum(str, Enum):
    OS = "OS"
    APPLICATION = "APPLICATION"

