from dataclasses import dataclass, field
from enum import Enum

class EffectivePolicyTypeEnum(str, Enum):
    TAG_POLICY = "TAG_POLICY"
    BACKUP_POLICY = "BACKUP_POLICY"
    AISERVICES_OPT_OUT_POLICY = "AISERVICES_OPT_OUT_POLICY"

