from dataclasses import dataclass, field
from typing import Enum

class AttackLayerEnum(str, Enum):
    NETWORK = "NETWORK"
    APPLICATION = "APPLICATION"

