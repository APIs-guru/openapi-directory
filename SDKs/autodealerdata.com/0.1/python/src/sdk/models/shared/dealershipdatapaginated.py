from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import dealershipdata


@dataclass_json
@dataclass
class DealershipDataPaginated:
    dealers: List[dealershipdata.DealershipData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealers' }})
    max_pages: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPages' }})
    page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
