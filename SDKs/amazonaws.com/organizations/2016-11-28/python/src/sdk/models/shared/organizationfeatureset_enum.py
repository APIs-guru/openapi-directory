from dataclasses import dataclass, field
from enum import Enum

class OrganizationFeatureSetEnum(str, Enum):
    ALL = "ALL"
    CONSOLIDATED_BILLING = "CONSOLIDATED_BILLING"

