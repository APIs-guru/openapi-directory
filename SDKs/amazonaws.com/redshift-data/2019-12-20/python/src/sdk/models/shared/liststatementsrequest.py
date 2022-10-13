from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import statusstring_enum


@dataclass_json
@dataclass
class ListStatementsRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    role_level: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleLevel' }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementName' }})
    status: Optional[statusstring_enum.StatusStringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
