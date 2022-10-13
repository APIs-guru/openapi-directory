from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import build
from . import nestdealer
from . import listingnestextraattributes
from . import listingfinance
from . import listinglease
from . import listingnestmedia


@dataclass_json
@dataclass
class Listing:
    build: Optional[build.Build] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    carfax_1_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carfax_1_owner' }})
    carfax_clean_title: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carfax_clean_title' }})
    data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_source' }})
    dealer: Optional[nestdealer.NestDealer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealer' }})
    dom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dom' }})
    dom_180: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dom_180' }})
    dom_active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dom_active' }})
    exterior_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exterior_color' }})
    extra: Optional[listingnestextraattributes.ListingNestExtraAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    financing_options: Optional[List[listingfinance.ListingFinance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'financing_options' }})
    first_seen_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at' }})
    first_seen_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at_date' }})
    first_seen_at_mc: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at_mc' }})
    first_seen_at_mc_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at_mc_date' }})
    first_seen_at_source: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at_source' }})
    first_seen_at_source_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_seen_at_source_date' }})
    heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heading' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interior_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interior_color' }})
    inventory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_type' }})
    is_certified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_certified' }})
    last_seen_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at' }})
    last_seen_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at_date' }})
    leasing_options: Optional[List[listinglease.ListingLease]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leasing_options' }})
    media: Optional[listingnestmedia.ListingNestMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    miles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles' }})
    msrp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msrp' }})
    price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    ref_miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref_miles' }})
    ref_miles_dt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref_miles_dt' }})
    ref_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref_price' }})
    ref_price_dt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref_price_dt' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    scraped_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scraped_at' }})
    scraped_at_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scraped_at_date' }})
    seller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_type' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    stock_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stock_no' }})
    vdp_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vdp_url' }})
    vin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vin' }})
    
