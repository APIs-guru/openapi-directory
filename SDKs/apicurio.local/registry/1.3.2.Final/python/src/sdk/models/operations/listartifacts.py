from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListArtifactsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    list_artifacts_200_application_json_strings: Optional[List[str]] = field(default=None)
    
