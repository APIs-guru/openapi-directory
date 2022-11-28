from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse:
    r"""GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse
    Response for ListSecurityProfileRevisions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    security_profiles: Optional[List[GoogleCloudApigeeV1SecurityProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfiles') }})
    
