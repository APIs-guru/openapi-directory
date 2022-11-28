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
class RvListing:
    r"""RvListing
    Represents a full list of attributes available with Marketcheck for a car
    """
    
    build: Optional[RvBuild] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    dealer: Optional[NestDealer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealer') }})
    dp_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dp_url') }})
    exterior_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exterior_color') }})
    extra: Optional[ListingNestExtraAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    first_seen_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at') }})
    first_seen_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at_date') }})
    heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interior_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interior_color') }})
    inventory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory_type') }})
    last_seen_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen_at') }})
    last_seen_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen_at_date') }})
    media: Optional[ListingNestMedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    miles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    msrp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msrp') }})
    price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    scraped_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scraped_at') }})
    scraped_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scraped_at_date') }})
    seller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller_type') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    stock_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stock_no') }})
    vin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vin') }})
    
