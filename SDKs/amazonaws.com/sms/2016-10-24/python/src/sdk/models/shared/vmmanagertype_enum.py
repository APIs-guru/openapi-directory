from dataclasses import dataclass, field
from typing import Enum

class VMManagerTypeEnum(str, Enum):
    VSPHERE = "VSPHERE"
    SCVMM = "SCVMM"
    HYPERV_MANAGER = "HYPERV-MANAGER"

