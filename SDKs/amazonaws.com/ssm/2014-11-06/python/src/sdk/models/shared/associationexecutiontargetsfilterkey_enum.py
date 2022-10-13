from dataclasses import dataclass, field
from typing import Enum

class AssociationExecutionTargetsFilterKeyEnum(str, Enum):
    STATUS = "Status"
    RESOURCE_ID = "ResourceId"
    RESOURCE_TYPE = "ResourceType"

