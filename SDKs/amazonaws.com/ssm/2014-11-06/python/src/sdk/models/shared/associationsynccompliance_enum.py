from dataclasses import dataclass, field
from enum import Enum

class AssociationSyncComplianceEnum(str, Enum):
    AUTO = "AUTO"
    MANUAL = "MANUAL"

