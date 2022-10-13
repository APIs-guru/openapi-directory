from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import longtermpricingtype_enum
from . import snowballtype_enum


@dataclass_json
@dataclass
class LongTermPricingListEntry:
    current_active_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentActiveJob' }})
    is_long_term_pricing_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLongTermPricingAutoRenew' }})
    job_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobIds' }})
    long_term_pricing_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_term_pricing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingId' }})
    long_term_pricing_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_term_pricing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingStatus' }})
    long_term_pricing_type: Optional[longtermpricingtype_enum.LongTermPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingType' }})
    replacement_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplacementJob' }})
    snowball_type: Optional[snowballtype_enum.SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballType' }})
    
