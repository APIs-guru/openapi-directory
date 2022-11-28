from dataclasses import dataclass, field
from enum import Enum

class IPSetDescriptorTypeEnum(str, Enum):
    IPV4 = "IPV4"
    IPV6 = "IPV6"

