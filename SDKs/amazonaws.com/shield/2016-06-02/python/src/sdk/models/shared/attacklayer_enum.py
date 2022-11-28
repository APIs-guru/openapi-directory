from dataclasses import dataclass, field
from enum import Enum

class AttackLayerEnum(str, Enum):
    NETWORK = "NETWORK"
    APPLICATION = "APPLICATION"

