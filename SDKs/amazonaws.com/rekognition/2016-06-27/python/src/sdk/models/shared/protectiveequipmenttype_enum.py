from dataclasses import dataclass, field
from typing import Enum

class ProtectiveEquipmentTypeEnum(str, Enum):
    FACE_COVER = "FACE_COVER"
    HAND_COVER = "HAND_COVER"
    HEAD_COVER = "HEAD_COVER"

