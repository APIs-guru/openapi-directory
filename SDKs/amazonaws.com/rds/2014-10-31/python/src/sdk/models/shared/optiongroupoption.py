from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OptionGroupOption:
    r"""OptionGroupOption
    Available option.
    """
    
    default_port: Optional[int] = field(default=None)
    description: Optional[str] = field(default=None)
    engine_name: Optional[str] = field(default=None)
    major_engine_version: Optional[str] = field(default=None)
    minimum_required_minor_engine_version: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    option_group_option_settings: Optional[List[OptionGroupOptionSetting]] = field(default=None)
    option_group_option_versions: Optional[List[OptionVersion]] = field(default=None)
    options_conflicts_with: Optional[List[str]] = field(default=None)
    options_depended_on: Optional[List[str]] = field(default=None)
    permanent: Optional[bool] = field(default=None)
    persistent: Optional[bool] = field(default=None)
    port_required: Optional[bool] = field(default=None)
    requires_auto_minor_engine_version_upgrade: Optional[bool] = field(default=None)
    supports_option_version_downgrade: Optional[bool] = field(default=None)
    vpc_only: Optional[bool] = field(default=None)
    
