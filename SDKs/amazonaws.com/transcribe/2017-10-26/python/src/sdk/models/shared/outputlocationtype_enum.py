from dataclasses import dataclass, field
from enum import Enum

class OutputLocationTypeEnum(str, Enum):
    CUSTOMER_BUCKET = "CUSTOMER_BUCKET"
    SERVICE_BUCKET = "SERVICE_BUCKET"

