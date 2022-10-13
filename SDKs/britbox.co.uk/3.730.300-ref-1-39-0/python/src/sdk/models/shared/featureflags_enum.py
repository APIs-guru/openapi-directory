from dataclasses import dataclass, field
from typing import Enum

class FeatureFlagsEnum(str, Enum):
    ALL = "all"
    IDP = "idp"
    LDP = "ldp"
    HB = "hb"
    RPT = "rpt"
    CAS = "cas"
    LRL = "lrl"
    CD = "cd"

