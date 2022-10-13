from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postsaleauthenticationprogram
from . import ebayfulfillmentprogram


@dataclass_json
@dataclass
class Program:
    authenticity_verification: Optional[postsaleauthenticationprogram.PostSaleAuthenticationProgram] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticityVerification' }})
    fulfillment_program: Optional[ebayfulfillmentprogram.EbayFulfillmentProgram] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentProgram' }})
    
