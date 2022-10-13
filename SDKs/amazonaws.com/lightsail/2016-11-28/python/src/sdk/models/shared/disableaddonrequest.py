from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import addontype_enum


@dataclass_json
@dataclass
class DisableAddOnRequest:
    add_on_type: addontype_enum.AddOnTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOnType' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    
