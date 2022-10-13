from dataclasses import dataclass, field
from typing import Enum

class StreamingInstanceTypeEnum(str, Enum):
    G4DN_XLARGE = "g4dn.xlarge"
    G4DN_2XLARGE = "g4dn.2xlarge"
    G4DN_4XLARGE = "g4dn.4xlarge"
    G4DN_8XLARGE = "g4dn.8xlarge"
    G4DN_12XLARGE = "g4dn.12xlarge"
    G4DN_16XLARGE = "g4dn.16xlarge"

