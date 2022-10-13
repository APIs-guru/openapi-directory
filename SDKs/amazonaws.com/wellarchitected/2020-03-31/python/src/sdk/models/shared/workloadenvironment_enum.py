from dataclasses import dataclass, field
from typing import Enum

class WorkloadEnvironmentEnum(str, Enum):
    PRODUCTION = "PRODUCTION"
    PREPRODUCTION = "PREPRODUCTION"

