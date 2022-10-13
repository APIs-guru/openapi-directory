from dataclasses import dataclass, field
from typing import Enum

class DatasetStatusEnum(str, Enum):
    CREATED = "CREATED"
    INGESTION_IN_PROGRESS = "INGESTION_IN_PROGRESS"
    ACTIVE = "ACTIVE"

