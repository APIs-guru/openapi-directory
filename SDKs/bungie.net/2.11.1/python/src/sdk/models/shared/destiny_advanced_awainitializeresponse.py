from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyAdvancedAwaInitializeResponse:
    correlation_id: Optional[str] = field(default=None)
    sent_to_self: Optional[bool] = field(default=None)
    
