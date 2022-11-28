from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentModelsContentTypeDefaultValue:
    default_value: Optional[str] = field(default=None)
    when_clause: Optional[str] = field(default=None)
    when_value: Optional[str] = field(default=None)
    
