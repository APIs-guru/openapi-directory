from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1apicategorydata


@dataclass_json
@dataclass
class GoogleCloudApigeeV1APICategory:
    data: Optional[googlecloudapigeev1apicategorydata.GoogleCloudApigeeV1APICategoryData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
