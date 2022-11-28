from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequestServiceQuotaIncreaseRequest:
    desired_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredValue') }})
    quota_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaCode') }})
    service_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    
