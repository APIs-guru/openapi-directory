from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListServiceQuotaIncreaseRequestsInTemplateRequest:
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegion') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    
