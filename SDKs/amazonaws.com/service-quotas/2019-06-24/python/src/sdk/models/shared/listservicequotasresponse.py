from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicequota


@dataclass_json
@dataclass
class ListServiceQuotasResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    quotas: Optional[List[servicequota.ServiceQuota]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quotas' }})
    
