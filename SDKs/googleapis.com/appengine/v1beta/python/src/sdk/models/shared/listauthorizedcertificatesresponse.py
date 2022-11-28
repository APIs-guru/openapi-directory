from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAuthorizedCertificatesResponse:
    r"""ListAuthorizedCertificatesResponse
    Response message for AuthorizedCertificates.ListAuthorizedCertificates.
    """
    
    certificates: Optional[List[AuthorizedCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
