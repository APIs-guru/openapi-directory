from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import currency_enum

class ItemPricingTypeEnum(str, Enum):
    FIXED = "fixed"
    VARIABLE = "variable"
    PER_UNIT = "per_unit"
    OTHER = "other"

class ItemProductTypeEnum(str, Enum):
    REGULAR = "regular"
    OTHER = "other"


@dataclass_json
@dataclass
class Item:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    absent_at_location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absent_at_location_ids' }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_for_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_pickup' }})
    available_online: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_online' }})
    categories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    modifier_groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_groups' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    present_at_all_locations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'present_at_all_locations' }})
    price_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_amount' }})
    price_currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_currency' }})
    pricing_type: Optional[ItemPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_type' }})
    product_type: Optional[ItemProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_type' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    tax_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_ids' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    variations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variations' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
