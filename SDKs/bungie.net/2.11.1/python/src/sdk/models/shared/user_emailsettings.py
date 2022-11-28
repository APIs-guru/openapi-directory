from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class UserEmailSettings:
    r"""UserEmailSettings
    The set of all email subscription/opt-in settings and definitions.
    """
    
    opt_in_definitions: Optional[dict[str, UserEmailOptInDefinition]] = field(default=None)
    subscription_definitions: Optional[dict[str, UserEmailSubscriptionDefinition]] = field(default=None)
    views: Optional[dict[str, UserEmailViewDefinition]] = field(default=None)
    
