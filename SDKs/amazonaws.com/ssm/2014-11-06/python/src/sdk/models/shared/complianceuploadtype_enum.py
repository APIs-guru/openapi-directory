from dataclasses import dataclass, field
from typing import Enum

class ComplianceUploadTypeEnum(str, Enum):
    COMPLETE = "COMPLETE"
    PARTIAL = "PARTIAL"

