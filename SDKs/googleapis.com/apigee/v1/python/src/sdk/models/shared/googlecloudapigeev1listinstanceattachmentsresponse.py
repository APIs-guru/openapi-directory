from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1instanceattachment


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListInstanceAttachmentsResponse:
    attachments: Optional[List[googlecloudapigeev1instanceattachment.GoogleCloudApigeeV1InstanceAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
