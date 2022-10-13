from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateWebACLMigrationStackResponse:
    s3_object_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ObjectUrl' }})
    
