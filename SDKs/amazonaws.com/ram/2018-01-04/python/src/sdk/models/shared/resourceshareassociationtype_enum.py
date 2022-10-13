from dataclasses import dataclass, field
from typing import Enum

class ResourceShareAssociationTypeEnum(str, Enum):
    PRINCIPAL = "PRINCIPAL"
    RESOURCE = "RESOURCE"

