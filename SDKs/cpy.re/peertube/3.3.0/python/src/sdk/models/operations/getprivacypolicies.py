from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetPrivacyPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    get_privacy_policies_200_application_json_strings: Optional[List[str]] = field(default=None)
    
