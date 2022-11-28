from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateEmailIdentityResponse:
    r"""CreateEmailIdentityResponse
    <p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p>
    """
    
    dkim_attributes: Optional[DkimAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimAttributes') }})
    identity_type: Optional[IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    verified_for_sending_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifiedForSendingStatus') }})
    
