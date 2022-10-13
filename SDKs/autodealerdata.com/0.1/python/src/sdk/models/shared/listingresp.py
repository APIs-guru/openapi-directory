from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listingresppaginated


@dataclass_json
@dataclass
class ListingResp:
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandName' }})
    cache_time_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheTimeLimit' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    data: listingresppaginated.ListingRespPaginated = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelName' }})
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msg' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionName' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
