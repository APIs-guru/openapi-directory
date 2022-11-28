from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserEMailSettingSubscriptionLocalization:
    r"""UserEMailSettingSubscriptionLocalization
    Localized text relevant to a given EMail setting in a given localization. Extra settings specifically for subscriptions.
    """
    
    description: Optional[str] = field(default=None)
    known_user_action_text: Optional[str] = field(default=None)
    registered_user_description: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    unknown_user_action_text: Optional[str] = field(default=None)
    unknown_user_description: Optional[str] = field(default=None)
    unregistered_user_description: Optional[str] = field(default=None)
    
