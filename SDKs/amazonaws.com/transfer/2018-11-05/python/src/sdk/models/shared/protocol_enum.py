from dataclasses import dataclass, field
from enum import Enum

class ProtocolEnum(str, Enum):
    SFTP = "SFTP"
    FTP = "FTP"
    FTPS = "FTPS"

