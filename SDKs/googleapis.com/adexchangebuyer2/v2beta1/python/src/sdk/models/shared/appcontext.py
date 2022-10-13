from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AppContextAppTypesEnum(str, Enum):
    NATIVE = "NATIVE"
    WEB = "WEB"


@dataclass_json
@dataclass
class AppContext:
    app_types: Optional[List[AppContextAppTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appTypes' }})
    
