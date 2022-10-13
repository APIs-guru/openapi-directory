from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeApplicationVersionRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    
