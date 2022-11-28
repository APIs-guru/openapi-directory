from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListEndpointAttachmentsResponse:
    r"""GoogleCloudApigeeV1ListEndpointAttachmentsResponse
    Response for ListEndpointAttachments method.
    """
    
    endpoint_attachments: Optional[List[GoogleCloudApigeeV1EndpointAttachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointAttachments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
