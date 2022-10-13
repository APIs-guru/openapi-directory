from dataclasses import dataclass, field
from typing import Enum

class SslCertificateFileFormatEnum(str, Enum):
    PFX = "pfx"

