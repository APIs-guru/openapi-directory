from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enabledserviceprincipal


@dataclass_json
@dataclass
class ListAwsServiceAccessForOrganizationResponse:
    enabled_service_principals: Optional[List[enabledserviceprincipal.EnabledServicePrincipal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledServicePrincipals' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
