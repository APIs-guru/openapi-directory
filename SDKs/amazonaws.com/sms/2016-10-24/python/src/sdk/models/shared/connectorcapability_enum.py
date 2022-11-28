from dataclasses import dataclass, field
from enum import Enum

class ConnectorCapabilityEnum(str, Enum):
    VSPHERE = "VSPHERE"
    SCVMM = "SCVMM"
    HYPERV_MANAGER = "HYPERV-MANAGER"
    SNAPSHOT_BATCHING = "SNAPSHOT_BATCHING"
    SMS_OPTIMIZED = "SMS_OPTIMIZED"

