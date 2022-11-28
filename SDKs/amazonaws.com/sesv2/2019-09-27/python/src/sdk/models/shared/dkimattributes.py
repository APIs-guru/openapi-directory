from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DkimAttributes:
    r"""DkimAttributes
    <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p>
    """
    
    signing_attributes_origin: Optional[DkimSigningAttributesOriginEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAttributesOrigin') }})
    signing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningEnabled') }})
    status: Optional[DkimStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tokens') }})
    
