from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbEngineVersion:
    r"""DbEngineVersion
     This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
    """
    
    db_engine_description: Optional[str] = field(default=None)
    db_engine_version_description: Optional[str] = field(default=None)
    db_parameter_group_family: Optional[str] = field(default=None)
    default_character_set: Optional[CharacterSet] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    exportable_log_types: Optional[List[str]] = field(default=None)
    supported_character_sets: Optional[List[CharacterSet]] = field(default=None)
    supported_timezones: Optional[List[Timezone]] = field(default=None)
    supports_log_exports_to_cloudwatch_logs: Optional[bool] = field(default=None)
    supports_read_replica: Optional[bool] = field(default=None)
    valid_upgrade_target: Optional[List[UpgradeTarget]] = field(default=None)
    
