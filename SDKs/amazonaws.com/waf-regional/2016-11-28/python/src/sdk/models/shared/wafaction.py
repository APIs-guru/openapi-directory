from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import wafactiontype_enum


@dataclass_json
@dataclass
class WafAction:
    type: wafactiontype_enum.WafActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
