from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1apiproxy


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListAPIProxiesResponse:
    proxies: Optional[List[googlecloudapigeev1apiproxy.GoogleCloudApigeeV1APIProxy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxies' }})
    
