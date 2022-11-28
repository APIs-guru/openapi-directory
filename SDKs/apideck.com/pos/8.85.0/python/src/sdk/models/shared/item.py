from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class ItemInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    absent_at_location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absent_at_location_ids') }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_pickup') }})
    available_online: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_online') }})
    categories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    modifier_groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifier_groups') }})
    options: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    present_at_all_locations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('present_at_all_locations') }})
    price_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_amount') }})
    price_currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_currency') }})
    pricing_type: Optional[ItemPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing_type') }})
    product_type: Optional[ItemProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    tax_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_ids') }})
    variations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variations') }})
    

@dataclass_json
@dataclass
class Item:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    absent_at_location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absent_at_location_ids') }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_pickup') }})
    available_online: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_online') }})
    categories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    modifier_groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifier_groups') }})
    options: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    present_at_all_locations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('present_at_all_locations') }})
    price_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_amount') }})
    price_currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_currency') }})
    pricing_type: Optional[ItemPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing_type') }})
    product_type: Optional[ItemProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    tax_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_ids') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    variations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variations') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
