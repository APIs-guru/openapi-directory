from dataclasses import dataclass, field
from typing import Enum

class SimulationJobBatchErrorCodeEnum(str, Enum):
    INTERNAL_SERVICE_ERROR = "InternalServiceError"

