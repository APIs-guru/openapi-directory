from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataexchange


@dataclass_json
@dataclass
class ListDataExchangesResponse:
    data_exchanges: Optional[List[dataexchange.DataExchange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataExchanges' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
