from dataclasses import dataclass, field
from enum import Enum

class KafkaClusterClientAuthenticationTypeEnum(str, Enum):
    NONE = "NONE"
    IAM = "IAM"

