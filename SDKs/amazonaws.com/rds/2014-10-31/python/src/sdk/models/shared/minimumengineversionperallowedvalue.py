from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MinimumEngineVersionPerAllowedValue:
    r"""MinimumEngineVersionPerAllowedValue
    The minimum DB engine version required for each corresponding allowed value for an option setting.
    """
    
    allowed_value: Optional[str] = field(default=None)
    minimum_engine_version: Optional[str] = field(default=None)
    
