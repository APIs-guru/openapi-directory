from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contactprotocol_enum


@dataclass_json
@dataclass
class GetContactMethodsRequest:
    protocols: Optional[List[contactprotocol_enum.ContactProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    
