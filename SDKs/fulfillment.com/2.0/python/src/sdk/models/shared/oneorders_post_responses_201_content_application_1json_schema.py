from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy:
    r"""OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy
    Responsibility for resolving this issue
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCode') }})
    stage: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    state: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    action_required_by: Optional[OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRequiredBy') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isClosed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    created_by: Optional[OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2:
    address1: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address_locality: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLocality') }})
    address_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressRegion') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    postal_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    iso: Optional[OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2:
    barcode_scan_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeScanValue') }})
    carrier: Optional[OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchema:
    current_status: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant: OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    merchant_order_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    merchant_shipping_method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantShippingMethod') }})
    original_consignee: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalConsignee') }})
    recorded_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validated_consignee: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedConsignee') }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_order: Optional[OneordersPostResponses201ContentApplication1jsonSchemaParentOrder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrder') }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNum') }})
    tracking_numbers: Optional[List[OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumbers') }})
    warehouse: Optional[OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    
