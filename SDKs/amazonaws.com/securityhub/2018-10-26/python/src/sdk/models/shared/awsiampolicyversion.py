from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsIamPolicyVersion:
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate' }})
    is_default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDefaultVersion' }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionId' }})
    
