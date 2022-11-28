from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ConfigUserTheme:
    user_theme_description: Optional[str] = field(default=None)
    user_theme_id: Optional[int] = field(default=None)
    user_theme_name: Optional[str] = field(default=None)
    
