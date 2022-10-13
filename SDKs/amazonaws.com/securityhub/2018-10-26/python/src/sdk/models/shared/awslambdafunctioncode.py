from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsLambdaFunctionCode:
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Key' }})
    s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ObjectVersion' }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFile' }})
    
