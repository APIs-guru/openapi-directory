from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput:
    r"""GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput
    Request message for UpdateUserLink RPC.
    """
    
    user_link: Optional[GoogleAnalyticsAdminV1alphaUserLinkInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLink') }})
    
