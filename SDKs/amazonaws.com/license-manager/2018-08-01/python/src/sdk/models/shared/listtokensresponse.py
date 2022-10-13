from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tokendata


@dataclass_json
@dataclass
class ListTokensResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    tokens: Optional[List[tokendata.TokenData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tokens' }})
    
