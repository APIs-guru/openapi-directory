from dataclasses import dataclass, field
from enum import Enum

class TCPFlagEnum(str, Enum):
    FIN = "FIN"
    SYN = "SYN"
    RST = "RST"
    PSH = "PSH"
    ACK = "ACK"
    URG = "URG"
    ECE = "ECE"
    CWR = "CWR"

