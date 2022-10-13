from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetServiceQuotaRequest:
    quota_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaCode' }})
    service_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCode' }})
    
