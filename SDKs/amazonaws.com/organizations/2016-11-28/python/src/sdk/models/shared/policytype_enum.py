from dataclasses import dataclass, field
from enum import Enum

class PolicyTypeEnum(str, Enum):
    SERVICE_CONTROL_POLICY = "SERVICE_CONTROL_POLICY"
    TAG_POLICY = "TAG_POLICY"
    BACKUP_POLICY = "BACKUP_POLICY"
    AISERVICES_OPT_OUT_POLICY = "AISERVICES_OPT_OUT_POLICY"

