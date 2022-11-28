from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ApkBinary:
    r"""ApkBinary
    Represents the binary payload of an APK.
    """
    
    sha1: Optional[str] = field(default=None)
    sha256: Optional[str] = field(default=None)
    
