from dataclasses import dataclass, field
from enum import Enum

class SavingsPlanTypeEnum(str, Enum):
    COMPUTE = "Compute"
    EC2_INSTANCE = "EC2Instance"
    SAGE_MAKER = "SageMaker"

