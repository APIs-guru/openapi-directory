from dataclasses import dataclass, field
from typing import Enum

class ProvisionedProductPlanStatusEnum(str, Enum):
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    CREATE_SUCCESS = "CREATE_SUCCESS"
    CREATE_FAILED = "CREATE_FAILED"
    EXECUTE_IN_PROGRESS = "EXECUTE_IN_PROGRESS"
    EXECUTE_SUCCESS = "EXECUTE_SUCCESS"
    EXECUTE_FAILED = "EXECUTE_FAILED"

