from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class QuittungTseQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class QuittungTseRequest:
    query_params: QuittungTseQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class QuittungTse200ApplicationJSON:
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    publickey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publickey' }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    

@dataclass
class QuittungTseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    quittung_tse_200_application_json_object: Optional[QuittungTse200ApplicationJSON] = field(default=None)
    
