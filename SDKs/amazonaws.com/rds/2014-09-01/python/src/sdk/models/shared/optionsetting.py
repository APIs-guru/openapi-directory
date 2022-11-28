from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionSetting:
    allowed_values: Optional[str] = field(default=None)
    apply_type: Optional[str] = field(default=None)
    data_type: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    is_collection: Optional[bool] = field(default=None)
    is_modifiable: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
