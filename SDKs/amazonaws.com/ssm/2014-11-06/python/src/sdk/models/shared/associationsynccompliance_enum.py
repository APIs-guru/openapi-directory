from dataclasses import dataclass, field
from typing import Enum

class AssociationSyncComplianceEnum(str, Enum):
    AUTO = "AUTO"
    MANUAL = "MANUAL"

