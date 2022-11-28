from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserEMailSettingLocalization:
    r"""UserEMailSettingLocalization
    Localized text relevant to a given EMail setting in a given localization.
    """
    
    description: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    
