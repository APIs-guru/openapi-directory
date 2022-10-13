from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import websitecasummary


@dataclass_json
@dataclass
class ListWebsiteCertificateAuthoritiesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    website_certificate_authorities: Optional[List[websitecasummary.WebsiteCaSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebsiteCertificateAuthorities' }})
    
