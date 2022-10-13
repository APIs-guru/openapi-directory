from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicequotaincreaserequestintemplate


@dataclass_json
@dataclass
class GetServiceQuotaIncreaseRequestFromTemplateResponse:
    service_quota_increase_request_in_template: Optional[servicequotaincreaserequestintemplate.ServiceQuotaIncreaseRequestInTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceQuotaIncreaseRequestInTemplate' }})
    
