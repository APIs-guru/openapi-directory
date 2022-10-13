from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1certinfo


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Certificate:
    cert_info: Optional[List[googlecloudapigeev1certinfo.GoogleCloudApigeeV1CertInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certInfo' }})
    
