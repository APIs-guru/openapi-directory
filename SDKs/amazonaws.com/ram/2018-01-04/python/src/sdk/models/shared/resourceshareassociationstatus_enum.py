from dataclasses import dataclass, field
from typing import Enum

class ResourceShareAssociationStatusEnum(str, Enum):
    ASSOCIATING = "ASSOCIATING"
    ASSOCIATED = "ASSOCIATED"
    FAILED = "FAILED"
    DISASSOCIATING = "DISASSOCIATING"
    DISASSOCIATED = "DISASSOCIATED"

