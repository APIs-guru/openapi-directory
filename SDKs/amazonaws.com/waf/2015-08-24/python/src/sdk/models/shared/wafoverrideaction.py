from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import wafoverrideactiontype_enum


@dataclass_json
@dataclass
class WafOverrideAction:
    type: wafoverrideactiontype_enum.WafOverrideActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
