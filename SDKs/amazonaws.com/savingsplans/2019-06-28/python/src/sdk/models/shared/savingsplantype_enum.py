from dataclasses import dataclass, field
from typing import Enum

class SavingsPlanTypeEnum(str, Enum):
    COMPUTE = "Compute"
    EC2_INSTANCE = "EC2Instance"
    SAGE_MAKER = "SageMaker"

