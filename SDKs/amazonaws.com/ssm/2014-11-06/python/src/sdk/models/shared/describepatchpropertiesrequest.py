from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operatingsystem_enum
from . import patchset_enum
from . import patchproperty_enum


@dataclass_json
@dataclass
class DescribePatchPropertiesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    operating_system: operatingsystem_enum.OperatingSystemEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    patch_set: Optional[patchset_enum.PatchSetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchSet' }})
    property: patchproperty_enum.PatchPropertyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Property' }})
    
