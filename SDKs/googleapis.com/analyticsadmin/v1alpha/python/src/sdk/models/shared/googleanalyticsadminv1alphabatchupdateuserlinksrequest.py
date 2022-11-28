from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput:
    r"""GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput
    Request message for BatchUpdateUserLinks RPC.
    """
    
    requests: Optional[List[GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
