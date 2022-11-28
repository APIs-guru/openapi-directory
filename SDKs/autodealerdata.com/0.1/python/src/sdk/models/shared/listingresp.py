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
class ListingResp:
    data: ListingRespPaginated = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    cache_time_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheTimeLimit') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
