from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyDefinitionsCommonDestinyIconSequenceDefinition:
    frames: Optional[List[str]] = field(default=None)
    
