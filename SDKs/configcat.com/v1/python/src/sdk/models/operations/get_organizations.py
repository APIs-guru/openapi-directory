from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOrganizationsResponse:
    content_type: str = field(default=None)
    organization_model_haljsons: Optional[List[shared.OrganizationModelHaljson]] = field(default=None)
    organization_models: Optional[List[shared.OrganizationModel]] = field(default=None)
    status_code: int = field(default=None)
    
