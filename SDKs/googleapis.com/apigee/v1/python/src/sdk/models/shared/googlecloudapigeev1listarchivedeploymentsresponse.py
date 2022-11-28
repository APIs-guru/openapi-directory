from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListArchiveDeploymentsResponse:
    r"""GoogleCloudApigeeV1ListArchiveDeploymentsResponse
    Response for ListArchiveDeployments method.
    """
    
    archive_deployments: Optional[List[GoogleCloudApigeeV1ArchiveDeployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveDeployments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
