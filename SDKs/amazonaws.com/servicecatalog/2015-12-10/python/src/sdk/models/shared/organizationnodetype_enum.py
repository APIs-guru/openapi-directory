from dataclasses import dataclass, field
from enum import Enum

class OrganizationNodeTypeEnum(str, Enum):
    ORGANIZATION = "ORGANIZATION"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
    ACCOUNT = "ACCOUNT"

