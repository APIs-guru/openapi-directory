from dataclasses import dataclass, field
from typing import Enum

class OrganizationNodeTypeEnum(str, Enum):
    ORGANIZATION = "ORGANIZATION"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
    ACCOUNT = "ACCOUNT"

