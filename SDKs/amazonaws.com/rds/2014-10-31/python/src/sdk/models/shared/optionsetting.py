from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionSetting:
    r"""OptionSetting
    Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.
    """
    
    allowed_values: Optional[str] = field(default=None)
    apply_type: Optional[str] = field(default=None)
    data_type: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    is_collection: Optional[bool] = field(default=None)
    is_modifiable: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
