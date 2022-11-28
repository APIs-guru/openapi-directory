from dataclasses import dataclass, field
from enum import Enum

class ResourceShareAssociationTypeEnum(str, Enum):
    PRINCIPAL = "PRINCIPAL"
    RESOURCE = "RESOURCE"

