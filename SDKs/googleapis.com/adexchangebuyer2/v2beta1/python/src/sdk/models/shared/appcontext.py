from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppContextAppTypesEnum(str, Enum):
    NATIVE = "NATIVE"
    WEB = "WEB"


@dataclass_json
@dataclass
class AppContext:
    r"""AppContext
    Output only. The app type the restriction applies to for mobile device.
    """
    
    app_types: Optional[List[AppContextAppTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appTypes') }})
    
