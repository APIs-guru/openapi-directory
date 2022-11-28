from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OptionGroupOptionSetting:
    r"""OptionGroupOptionSetting
    Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
    """
    
    allowed_values: Optional[str] = field(default=None)
    apply_type: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    is_modifiable: Optional[bool] = field(default=None)
    is_required: Optional[bool] = field(default=None)
    minimum_engine_version_per_allowed_value: Optional[List[MinimumEngineVersionPerAllowedValue]] = field(default=None)
    setting_description: Optional[str] = field(default=None)
    setting_name: Optional[str] = field(default=None)
    
