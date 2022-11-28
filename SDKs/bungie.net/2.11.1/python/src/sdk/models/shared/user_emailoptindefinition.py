from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UserEmailOptInDefinition:
    r"""UserEmailOptInDefinition
    Defines a single opt-in category: a wide-scoped permission to send emails for the subject related to the opt-in.
    """
    
    dependent_subscriptions: Optional[List[UserEmailSubscriptionDefinition]] = field(default=None)
    name: Optional[str] = field(default=None)
    set_by_default: Optional[bool] = field(default=None)
    value: Optional[int] = field(default=None)
    
