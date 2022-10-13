from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsCloudFrontDistributionLogging:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    include_cookies: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeCookies' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    
