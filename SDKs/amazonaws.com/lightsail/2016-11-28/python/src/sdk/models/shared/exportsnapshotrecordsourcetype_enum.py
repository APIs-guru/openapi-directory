from dataclasses import dataclass, field
from typing import Enum

class ExportSnapshotRecordSourceTypeEnum(str, Enum):
    INSTANCE_SNAPSHOT = "InstanceSnapshot"
    DISK_SNAPSHOT = "DiskSnapshot"

