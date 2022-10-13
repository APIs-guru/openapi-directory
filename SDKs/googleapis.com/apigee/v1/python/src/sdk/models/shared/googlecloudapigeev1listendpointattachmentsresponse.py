from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1endpointattachment


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListEndpointAttachmentsResponse:
    endpoint_attachments: Optional[List[googlecloudapigeev1endpointattachment.GoogleCloudApigeeV1EndpointAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointAttachments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
