from dataclasses import dataclass, field
from typing import Enum

class OutputLocationTypeEnum(str, Enum):
    CUSTOMER_BUCKET = "CUSTOMER_BUCKET"
    SERVICE_BUCKET = "SERVICE_BUCKET"

