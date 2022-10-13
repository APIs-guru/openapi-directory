from dataclasses import dataclass, field
from typing import Enum

class WorkspaceDirectoryTypeEnum(str, Enum):
    SIMPLE_AD = "SIMPLE_AD"
    AD_CONNECTOR = "AD_CONNECTOR"

