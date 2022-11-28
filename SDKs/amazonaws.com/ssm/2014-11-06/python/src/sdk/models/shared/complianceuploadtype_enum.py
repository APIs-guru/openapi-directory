from dataclasses import dataclass, field
from enum import Enum

class ComplianceUploadTypeEnum(str, Enum):
    COMPLETE = "COMPLETE"
    PARTIAL = "PARTIAL"

