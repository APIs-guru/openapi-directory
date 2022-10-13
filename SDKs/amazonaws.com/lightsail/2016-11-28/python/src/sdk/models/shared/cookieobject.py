from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import forwardvalues_enum


@dataclass_json
@dataclass
class CookieObject:
    cookies_allow_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookiesAllowList' }})
    option: Optional[forwardvalues_enum.ForwardValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    
