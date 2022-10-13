from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import resourcebucketaccess_enum


@dataclass_json
@dataclass
class SetResourceAccessForBucketRequest:
    access: resourcebucketaccess_enum.ResourceBucketAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    
