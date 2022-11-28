from dataclasses import dataclass, field
from enum import Enum

class ResourceShareAssociationStatusEnum(str, Enum):
    ASSOCIATING = "ASSOCIATING"
    ASSOCIATED = "ASSOCIATED"
    FAILED = "FAILED"
    DISASSOCIATING = "DISASSOCIATING"
    DISASSOCIATED = "DISASSOCIATED"

