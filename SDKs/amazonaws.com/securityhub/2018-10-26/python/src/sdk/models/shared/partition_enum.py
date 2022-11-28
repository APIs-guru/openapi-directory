from dataclasses import dataclass, field
from enum import Enum

class PartitionEnum(str, Enum):
    AWS = "aws"
    AWS_CN = "aws-cn"
    AWS_US_GOV = "aws-us-gov"

