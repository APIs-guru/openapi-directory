from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeApplicationRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    include_additional_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeAdditionalDetails' }})
    
