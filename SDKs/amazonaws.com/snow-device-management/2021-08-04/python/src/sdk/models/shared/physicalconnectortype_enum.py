from dataclasses import dataclass, field
from enum import Enum

class PhysicalConnectorTypeEnum(str, Enum):
    RJ45 = "RJ45"
    SFP_PLUS = "SFP_PLUS"
    QSFP = "QSFP"
    RJ45_2 = "RJ45_2"
    WIFI = "WIFI"

