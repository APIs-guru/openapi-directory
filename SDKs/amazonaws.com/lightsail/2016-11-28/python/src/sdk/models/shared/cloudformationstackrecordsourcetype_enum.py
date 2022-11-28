from dataclasses import dataclass, field
from enum import Enum

class CloudFormationStackRecordSourceTypeEnum(str, Enum):
    EXPORT_SNAPSHOT_RECORD = "ExportSnapshotRecord"

