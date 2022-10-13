from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerManagedS3Storage:
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    s3_resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3ResourceArn' }})
    
