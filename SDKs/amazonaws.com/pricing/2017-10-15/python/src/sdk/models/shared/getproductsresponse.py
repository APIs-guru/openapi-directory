from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetProductsResponse:
    format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FormatVersion' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    price_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PriceList' }})
    
