from dataclasses import dataclass, field
from typing import Enum

class ServiceActionDefinitionTypeEnum(str, Enum):
    SSM_AUTOMATION = "SSM_AUTOMATION"

