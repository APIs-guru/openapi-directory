from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enrollmenttoken


@dataclass_json
@dataclass
class ListEnrollmentTokensResponse:
    enrollment_tokens: Optional[List[enrollmenttoken.EnrollmentToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentTokens' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
