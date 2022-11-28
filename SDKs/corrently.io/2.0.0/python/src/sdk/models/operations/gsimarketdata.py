from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GsiMarketdataQueryParams:
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GsiMarketdata200ApplicationJSON:
    data: Optional[List[shared.MarketData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GsiMarketdataRequest:
    query_params: GsiMarketdataQueryParams = field()
    

@dataclass
class GsiMarketdataResponse:
    content_type: str = field()
    status_code: int = field()
    gsi_marketdata_200_application_json_object: Optional[GsiMarketdata200ApplicationJSON] = field(default=None)
    
