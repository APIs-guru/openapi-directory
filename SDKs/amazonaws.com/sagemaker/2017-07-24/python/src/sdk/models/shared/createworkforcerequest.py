from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWorkforceRequest:
    workforce_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkforceName') }})
    cognito_config: Optional[CognitoConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoConfig') }})
    oidc_config: Optional[OidcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OidcConfig') }})
    source_ip_config: Optional[SourceIPConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIpConfig') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
