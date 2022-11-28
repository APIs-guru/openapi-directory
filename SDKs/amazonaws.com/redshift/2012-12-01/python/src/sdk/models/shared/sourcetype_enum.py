from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    CLUSTER = "cluster"
    CLUSTER_PARAMETER_GROUP = "cluster-parameter-group"
    CLUSTER_SECURITY_GROUP = "cluster-security-group"
    CLUSTER_SNAPSHOT = "cluster-snapshot"
    SCHEDULED_ACTION = "scheduled-action"

