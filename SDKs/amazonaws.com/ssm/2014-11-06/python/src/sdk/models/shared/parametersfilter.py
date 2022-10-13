from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import parametersfilterkey_enum


@dataclass_json
@dataclass
class ParametersFilter:
    key: parametersfilterkey_enum.ParametersFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
