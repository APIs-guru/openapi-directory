from dataclasses import dataclass, field
from enum import Enum

class DescribeActivationsFilterKeysEnum(str, Enum):
    ACTIVATION_IDS = "ActivationIds"
    DEFAULT_INSTANCE_NAME = "DefaultInstanceName"
    IAM_ROLE = "IamRole"

