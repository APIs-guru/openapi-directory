from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UserEmailViewDefinition:
    r"""UserEmailViewDefinition
    Represents a data-driven view for Email settings. Web/Mobile UI can use this data to show new EMail settings consistently without further manual work.
    """
    
    name: Optional[str] = field(default=None)
    view_settings: Optional[List[UserEmailViewDefinitionSetting]] = field(default=None)
    
