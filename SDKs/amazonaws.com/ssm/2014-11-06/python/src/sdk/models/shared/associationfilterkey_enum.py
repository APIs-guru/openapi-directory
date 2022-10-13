from dataclasses import dataclass, field
from typing import Enum

class AssociationFilterKeyEnum(str, Enum):
    INSTANCE_ID = "InstanceId"
    NAME = "Name"
    ASSOCIATION_ID = "AssociationId"
    ASSOCIATION_STATUS_NAME = "AssociationStatusName"
    LAST_EXECUTED_BEFORE = "LastExecutedBefore"
    LAST_EXECUTED_AFTER = "LastExecutedAfter"
    ASSOCIATION_NAME = "AssociationName"
    RESOURCE_GROUP_NAME = "ResourceGroupName"

