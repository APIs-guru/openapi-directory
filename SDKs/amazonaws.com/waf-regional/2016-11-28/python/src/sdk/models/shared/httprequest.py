from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpheader


@dataclass_json
@dataclass
class HTTPRequest:
    client_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientIP' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    http_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HTTPVersion' }})
    headers: Optional[List[httpheader.HTTPHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Method' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'URI' }})
    
