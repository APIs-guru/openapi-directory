from dataclasses import dataclass, field
from enum import Enum

class AssociationExecutionTargetsFilterKeyEnum(str, Enum):
    STATUS = "Status"
    RESOURCE_ID = "ResourceId"
    RESOURCE_TYPE = "ResourceType"

