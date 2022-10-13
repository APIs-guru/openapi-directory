from dataclasses import dataclass, field
from typing import Enum

class ProtocolEnum(str, Enum):
    SFTP = "SFTP"
    FTP = "FTP"
    FTPS = "FTPS"

