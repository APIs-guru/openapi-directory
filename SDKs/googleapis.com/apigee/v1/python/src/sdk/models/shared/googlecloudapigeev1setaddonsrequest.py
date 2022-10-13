from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1addonsconfig


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SetAddonsRequest:
    addons_config: Optional[googlecloudapigeev1addonsconfig.GoogleCloudApigeeV1AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonsConfig' }})
    
