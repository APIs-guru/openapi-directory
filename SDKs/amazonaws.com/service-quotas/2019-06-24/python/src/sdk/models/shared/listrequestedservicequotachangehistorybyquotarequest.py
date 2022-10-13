from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import requeststatus_enum


@dataclass_json
@dataclass
class ListRequestedServiceQuotaChangeHistoryByQuotaRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    quota_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaCode' }})
    service_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCode' }})
    status: Optional[requeststatus_enum.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
