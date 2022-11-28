from dataclasses import dataclass, field
from enum import Enum

class SystemInstanceFilterNameEnum(str, Enum):
    SYSTEM_TEMPLATE_ID = "SYSTEM_TEMPLATE_ID"
    STATUS = "STATUS"
    GREENGRASS_GROUP_NAME = "GREENGRASS_GROUP_NAME"

