from dataclasses import dataclass, field
from typing import Enum

class OrganizationFeatureSetEnum(str, Enum):
    ALL = "ALL"
    CONSOLIDATED_BILLING = "CONSOLIDATED_BILLING"

