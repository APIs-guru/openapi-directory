from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutEmailIdentityDkimSigningAttributesResponse:
    r"""PutEmailIdentityDkimSigningAttributesResponse
    <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
    """
    
    dkim_status: Optional[DkimStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimStatus') }})
    dkim_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimTokens') }})
    
