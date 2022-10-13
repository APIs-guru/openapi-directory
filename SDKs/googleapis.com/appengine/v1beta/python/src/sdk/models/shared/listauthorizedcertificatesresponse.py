from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizedcertificate


@dataclass_json
@dataclass
class ListAuthorizedCertificatesResponse:
    certificates: Optional[List[authorizedcertificate.AuthorizedCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
