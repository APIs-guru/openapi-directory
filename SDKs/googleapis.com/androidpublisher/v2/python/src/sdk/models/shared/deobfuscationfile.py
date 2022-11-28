from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeobfuscationFile:
    r"""DeobfuscationFile
    Represents a deobfuscation file.
    """
    
    symbol_type: Optional[str] = field(default=None)
    
