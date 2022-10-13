from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class EchoQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    echo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'echo', 'style': 'form', 'explode': True }})
    

@dataclass
class EchoRequest:
    query_params: EchoQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Echo200ApplicationJSONEcho:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class Echo200ApplicationJSON:
    echo: Optional[Echo200ApplicationJSONEcho] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'echo' }})
    

@dataclass
class EchoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    echo_200_application_json_object: Optional[Echo200ApplicationJSON] = field(default=None)
    
