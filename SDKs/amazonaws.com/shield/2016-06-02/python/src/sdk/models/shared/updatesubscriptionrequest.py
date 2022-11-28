from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSubscriptionRequest:
    auto_renew: Optional[AutoRenewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    
