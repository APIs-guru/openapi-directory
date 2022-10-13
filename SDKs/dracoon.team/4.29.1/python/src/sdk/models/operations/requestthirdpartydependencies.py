from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestThirdPartyDependenciesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    third_party_dependencies_data: Optional[List[shared.ThirdPartyDependenciesData]] = field(default=None)
    
