from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InputDataConfig:
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    tuning_data_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TuningDataS3Uri' }})
    
