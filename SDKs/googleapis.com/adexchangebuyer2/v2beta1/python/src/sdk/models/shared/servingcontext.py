from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appcontext
from . import auctioncontext
from . import locationcontext
from . import platformcontext
from . import securitycontext

class ServingContextAllEnum(str, Enum):
    SIMPLE_CONTEXT = "SIMPLE_CONTEXT"


@dataclass_json
@dataclass
class ServingContext:
    all: Optional[ServingContextAllEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    app_type: Optional[appcontext.AppContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appType' }})
    auction_type: Optional[auctioncontext.AuctionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auctionType' }})
    location: Optional[locationcontext.LocationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    platform: Optional[platformcontext.PlatformContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    security_type: Optional[securitycontext.SecurityContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityType' }})
    
