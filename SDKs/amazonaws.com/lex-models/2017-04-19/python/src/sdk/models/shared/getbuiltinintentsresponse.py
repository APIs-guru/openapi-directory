from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import builtinintentmetadata


@dataclass_json
@dataclass
class GetBuiltinIntentsResponse:
    intents: Optional[List[builtinintentmetadata.BuiltinIntentMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
