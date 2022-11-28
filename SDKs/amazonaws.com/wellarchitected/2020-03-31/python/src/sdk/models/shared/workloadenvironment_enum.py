from dataclasses import dataclass, field
from enum import Enum

class WorkloadEnvironmentEnum(str, Enum):
    PRODUCTION = "PRODUCTION"
    PREPRODUCTION = "PREPRODUCTION"

