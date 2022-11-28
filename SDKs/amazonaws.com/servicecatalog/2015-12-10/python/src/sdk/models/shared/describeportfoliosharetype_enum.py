from dataclasses import dataclass, field
from enum import Enum

class DescribePortfolioShareTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
    ORGANIZATION_MEMBER_ACCOUNT = "ORGANIZATION_MEMBER_ACCOUNT"

