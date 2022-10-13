from dataclasses import dataclass, field
from typing import Enum

class NotificationTypeEnum(str, Enum):
    LENS_VERSION_UPGRADED = "LENS_VERSION_UPGRADED"
    LENS_VERSION_DEPRECATED = "LENS_VERSION_DEPRECATED"

