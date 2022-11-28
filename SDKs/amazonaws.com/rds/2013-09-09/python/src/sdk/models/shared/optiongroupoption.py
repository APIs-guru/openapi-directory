from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OptionGroupOption:
    default_port: Optional[int] = field(default=None)
    description: Optional[str] = field(default=None)
    engine_name: Optional[str] = field(default=None)
    major_engine_version: Optional[str] = field(default=None)
    minimum_required_minor_engine_version: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    option_group_option_settings: Optional[List[OptionGroupOptionSetting]] = field(default=None)
    options_depended_on: Optional[List[str]] = field(default=None)
    permanent: Optional[bool] = field(default=None)
    persistent: Optional[bool] = field(default=None)
    port_required: Optional[bool] = field(default=None)
    
