from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scripttype_enum
from . import source


@dataclass_json
@dataclass
class UserDataValidationParameters:
    script_type: Optional[scripttype_enum.ScriptTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptType' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
