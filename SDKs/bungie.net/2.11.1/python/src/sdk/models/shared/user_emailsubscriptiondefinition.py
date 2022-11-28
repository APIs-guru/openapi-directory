from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class UserEmailSubscriptionDefinition:
    r"""UserEmailSubscriptionDefinition
    Defines a single subscription: permission to send emails for a specific, focused subject (generally timeboxed, such as for a specific release of a product or feature).
    """
    
    localization: Optional[dict[str, UserEMailSettingSubscriptionLocalization]] = field(default=None)
    name: Optional[str] = field(default=None)
    value: Optional[int] = field(default=None)
    
