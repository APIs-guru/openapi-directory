from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import extraparamname_enum


@dataclass_json
@dataclass
class ExtraParam:
    name: extraparamname_enum.ExtraParamNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
