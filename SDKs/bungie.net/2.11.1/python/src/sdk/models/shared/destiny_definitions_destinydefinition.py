from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyDefinitionsDestinyDefinition:
    r"""DestinyDefinitionsDestinyDefinition
    Provides common properties for destiny definitions.
    """
    
    hash: Optional[int] = field(default=None)
    index: Optional[int] = field(default=None)
    redacted: Optional[bool] = field(default=None)
    
