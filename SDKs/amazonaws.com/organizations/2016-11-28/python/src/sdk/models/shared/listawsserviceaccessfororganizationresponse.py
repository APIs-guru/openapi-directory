from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAwsServiceAccessForOrganizationResponse:
    enabled_service_principals: Optional[List[EnabledServicePrincipal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnabledServicePrincipals') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
