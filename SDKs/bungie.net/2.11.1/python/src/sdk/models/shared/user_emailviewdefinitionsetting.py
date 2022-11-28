from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UserEmailViewDefinitionSetting:
    localization: Optional[dict[str, UserEMailSettingLocalization]] = field(default=None)
    name: Optional[str] = field(default=None)
    opt_in_aggregate_value: Optional[int] = field(default=None)
    set_by_default: Optional[bool] = field(default=None)
    subscriptions: Optional[List[UserEmailSubscriptionDefinition]] = field(default=None)
    
