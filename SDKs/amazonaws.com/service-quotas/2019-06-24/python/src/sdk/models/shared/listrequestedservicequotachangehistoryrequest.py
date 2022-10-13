from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import requeststatus_enum


@dataclass_json
@dataclass
class ListRequestedServiceQuotaChangeHistoryRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCode' }})
    status: Optional[requeststatus_enum.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
