from dataclasses import dataclass, field
from enum import Enum

class SimulationJobBatchErrorCodeEnum(str, Enum):
    INTERNAL_SERVICE_ERROR = "InternalServiceError"

