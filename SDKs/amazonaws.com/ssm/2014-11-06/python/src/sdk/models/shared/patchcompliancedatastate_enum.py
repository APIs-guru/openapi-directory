from dataclasses import dataclass, field
from enum import Enum

class PatchComplianceDataStateEnum(str, Enum):
    INSTALLED = "INSTALLED"
    INSTALLED_OTHER = "INSTALLED_OTHER"
    INSTALLED_PENDING_REBOOT = "INSTALLED_PENDING_REBOOT"
    INSTALLED_REJECTED = "INSTALLED_REJECTED"
    MISSING = "MISSING"
    NOT_APPLICABLE = "NOT_APPLICABLE"
    FAILED = "FAILED"

