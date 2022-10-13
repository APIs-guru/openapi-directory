from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applicationdetail


@dataclass_json
@dataclass
class DescribeApplicationVersionResponse:
    application_version_detail: Optional[applicationdetail.ApplicationDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionDetail' }})
    
