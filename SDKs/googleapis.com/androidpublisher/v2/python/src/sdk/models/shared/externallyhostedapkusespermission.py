from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExternallyHostedApkUsesPermission:
    max_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSdkVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
