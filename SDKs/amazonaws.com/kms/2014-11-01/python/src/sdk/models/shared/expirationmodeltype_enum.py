from dataclasses import dataclass, field
from typing import Enum

class ExpirationModelTypeEnum(str, Enum):
    KEY_MATERIAL_EXPIRES = "KEY_MATERIAL_EXPIRES"
    KEY_MATERIAL_DOES_NOT_EXPIRE = "KEY_MATERIAL_DOES_NOT_EXPIRE"

