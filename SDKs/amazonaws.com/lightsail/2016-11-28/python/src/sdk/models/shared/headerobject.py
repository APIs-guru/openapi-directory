from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import headerenum_enum
from . import forwardvalues_enum


@dataclass_json
@dataclass
class HeaderObject:
    headers_allow_list: Optional[List[headerenum_enum.HeaderEnumEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headersAllowList' }})
    option: Optional[forwardvalues_enum.ForwardValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    
