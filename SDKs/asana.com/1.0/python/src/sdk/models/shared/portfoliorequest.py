from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PortfolioRequestColorEnum(str, Enum):
    DARK_PINK = "dark-pink"
    DARK_GREEN = "dark-green"
    DARK_BLUE = "dark-blue"
    DARK_RED = "dark-red"
    DARK_TEAL = "dark-teal"
    DARK_BROWN = "dark-brown"
    DARK_ORANGE = "dark-orange"
    DARK_PURPLE = "dark-purple"
    DARK_WARM_GRAY = "dark-warm-gray"
    LIGHT_PINK = "light-pink"
    LIGHT_GREEN = "light-green"
    LIGHT_BLUE = "light-blue"
    LIGHT_RED = "light-red"
    LIGHT_TEAL = "light-teal"
    LIGHT_BROWN = "light-brown"
    LIGHT_ORANGE = "light-orange"
    LIGHT_PURPLE = "light-purple"
    LIGHT_WARM_GRAY = "light-warm-gray"


@dataclass_json
@dataclass
class PortfolioRequest:
    color: Optional[PortfolioRequestColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    workspace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    
