from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryStringObject:
    option: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    query_strings_allow_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryStringsAllowList' }})
    
