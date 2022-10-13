from dataclasses import dataclass, field
from typing import Enum

class SavingsPlanRateServiceCodeEnum(str, Enum):
    AMAZON_EC2 = "AmazonEC2"
    AMAZON_ECS = "AmazonECS"
    AMAZON_EKS = "AmazonEKS"
    AWS_LAMBDA = "AWSLambda"
    AMAZON_SAGE_MAKER = "AmazonSageMaker"

