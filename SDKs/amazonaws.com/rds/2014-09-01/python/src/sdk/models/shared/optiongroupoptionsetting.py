from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionGroupOptionSetting:
    allowed_values: Optional[str] = field(default=None)
    apply_type: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    is_modifiable: Optional[bool] = field(default=None)
    setting_description: Optional[str] = field(default=None)
    setting_name: Optional[str] = field(default=None)
    
