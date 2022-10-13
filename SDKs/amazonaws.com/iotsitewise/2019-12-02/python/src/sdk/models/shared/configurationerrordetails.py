from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import errorcode_enum


@dataclass_json
@dataclass
class ConfigurationErrorDetails:
    code: errorcode_enum.ErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
