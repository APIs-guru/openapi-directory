from dataclasses import dataclass, field
from enum import Enum

class SavingsPlanProductTypeEnum(str, Enum):
    EC2 = "EC2"
    FARGATE = "Fargate"
    LAMBDA = "Lambda"
    SAGE_MAKER = "SageMaker"

