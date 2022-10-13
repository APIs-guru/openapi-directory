from dataclasses import dataclass, field
from typing import Enum

class ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum(str, Enum):
    AUTO = "AUTO"
    GP2 = "GP2"
    IO1 = "IO1"
    SC1 = "SC1"
    ST1 = "ST1"
    STANDARD = "STANDARD"

