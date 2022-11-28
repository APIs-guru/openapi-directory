from dataclasses import dataclass, field
from enum import Enum

class PortfolioShareTypeEnum(str, Enum):
    IMPORTED = "IMPORTED"
    AWS_SERVICECATALOG = "AWS_SERVICECATALOG"
    AWS_ORGANIZATIONS = "AWS_ORGANIZATIONS"

