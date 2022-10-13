from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectionalias


@dataclass_json
@dataclass
class DescribeConnectionAliasesResult:
    connection_aliases: Optional[List[connectionalias.ConnectionAlias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionAliases' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
