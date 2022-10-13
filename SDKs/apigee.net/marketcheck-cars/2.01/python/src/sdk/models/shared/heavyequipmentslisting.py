from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rvbuild
from . import nestdealer
from . import listingnestextraattributes
from . import listingnestmedia


@dataclass_json
@dataclass
class HeavyEquipmentsListing:
    build: Optional[rvbuild.RvBuild] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    dealer: Optional[nestdealer.NestDealer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealer' }})
    dp_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dp_url' }})
    exterior_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exterior_color' }})
    extra: Optional[listingnestextraattributes.ListingNestExtraAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    first_seen_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at' }})
    first_seen_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at_date' }})
    heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heading' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interior_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interior_color' }})
    inventory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_type' }})
    last_seen_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at' }})
    last_seen_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at_date' }})
    media: Optional[listingnestmedia.ListingNestMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    miles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles' }})
    msrp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msrp' }})
    price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    scraped_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scraped_at' }})
    scraped_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scraped_at_date' }})
    seller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_type' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    stock_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stock_no' }})
    vin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vin' }})
    
