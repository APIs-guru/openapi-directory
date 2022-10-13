from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import _1returns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby
from . import _1returns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby
from . import _1orders_post_responses_201_content_application_1json_schema_properties_originalconsignee


@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusActionRequiredBy:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusState:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStatusTypeV2:
    action_required_by: Optional[OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionRequiredBy' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    detail_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailCode' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isClosed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    stage: OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    state: OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusState = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusEventV2:
    created_by: Optional[_1returns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaMerchantMerchantV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeIsoIsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso2' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeConsigneeV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso: Optional[OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeIsoIsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[_1returns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersCarrierCarrierSimpleV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersTrackingNumberV2:
    barcode_scan_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcodeScanValue' }})
    carrier: Optional[OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersCarrierCarrierSimpleV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaWarehouseWarehouseV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class OneordersPostResponses201ContentApplication1jsonSchema:
    current_status: OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusEventV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStatus' }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    merchant: OneordersPostResponses201ContentApplication1jsonSchemaMerchantMerchantV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    merchant_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    merchant_shipping_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantShippingMethod' }})
    original_consignee: OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeConsigneeV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalConsignee' }})
    parent_order: Optional[OneordersPostResponses201ContentApplication1jsonSchemaParentOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOrder' }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderNum' }})
    recorded_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tracking_numbers: Optional[List[OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersTrackingNumberV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumbers' }})
    validated_consignee: _1orders_post_responses_201_content_application_1json_schema_properties_originalconsignee.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedConsignee' }})
    warehouse: Optional[OneordersPostResponses201ContentApplication1jsonSchemaWarehouseWarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    
