from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EchoQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    echo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'echo', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Echo200ApplicationJSONEcho:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class Echo200ApplicationJSON:
    echo: Optional[Echo200ApplicationJSONEcho] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('echo') }})
    

@dataclass
class EchoRequest:
    query_params: EchoQueryParams = field()
    

@dataclass
class EchoResponse:
    content_type: str = field()
    status_code: int = field()
    echo_200_application_json_object: Optional[Echo200ApplicationJSON] = field(default=None)
    
