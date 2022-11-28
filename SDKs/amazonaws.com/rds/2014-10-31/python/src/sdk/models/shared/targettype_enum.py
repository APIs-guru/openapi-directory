from dataclasses import dataclass, field
from enum import Enum

class TargetTypeEnum(str, Enum):
    RDS_INSTANCE = "RDS_INSTANCE"
    RDS_SERVERLESS_ENDPOINT = "RDS_SERVERLESS_ENDPOINT"
    TRACKED_CLUSTER = "TRACKED_CLUSTER"

