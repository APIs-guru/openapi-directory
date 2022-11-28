from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServingContextAllEnum(str, Enum):
    SIMPLE_CONTEXT = "SIMPLE_CONTEXT"


@dataclass_json
@dataclass
class ServingContext:
    r"""ServingContext
    The serving context for this restriction.
    """
    
    all: Optional[ServingContextAllEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    app_type: Optional[AppContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appType') }})
    auction_type: Optional[AuctionContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionType') }})
    location: Optional[LocationContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    platform: Optional[PlatformContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    security_type: Optional[SecurityContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityType') }})
    
