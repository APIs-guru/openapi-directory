from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contacttype_enum


@dataclass_json
@dataclass
class ListContactsRequest:
    alias_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasPrefix' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    type: Optional[contacttype_enum.ContactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
