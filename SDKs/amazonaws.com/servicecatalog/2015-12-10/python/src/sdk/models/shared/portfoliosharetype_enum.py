from dataclasses import dataclass, field
from typing import Enum

class PortfolioShareTypeEnum(str, Enum):
    IMPORTED = "IMPORTED"
    AWS_SERVICECATALOG = "AWS_SERVICECATALOG"
    AWS_ORGANIZATIONS = "AWS_ORGANIZATIONS"

