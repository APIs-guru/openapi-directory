from dataclasses import dataclass, field
from typing import Enum

class KafkaClusterClientAuthenticationTypeEnum(str, Enum):
    NONE = "NONE"
    IAM = "IAM"

