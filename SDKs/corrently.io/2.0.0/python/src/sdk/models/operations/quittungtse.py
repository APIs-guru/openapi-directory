from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class QuittungTseQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class QuittungTse200ApplicationJSON:
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    publickey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publickey') }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    

@dataclass
class QuittungTseRequest:
    query_params: QuittungTseQueryParams = field()
    

@dataclass
class QuittungTseResponse:
    content_type: str = field()
    status_code: int = field()
    quittung_tse_200_application_json_object: Optional[QuittungTse200ApplicationJSON] = field(default=None)
    
