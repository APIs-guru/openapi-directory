from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInventoryQueryParams:
    external_sku_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'externalSkuNames', 'style': 'form', 'explode': False }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    merchant_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'merchantIds', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInventorySecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInventoryRequest:
    query_params: GetInventoryQueryParams = field(default=None)
    security: GetInventorySecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONDataItem:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    sku_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuReference' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONDataMerchant:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONDataQuantityTotal:
    available_to_promise: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableToPromise' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONDataQuantity:
    total: Optional[GetInventory200ApplicationJSONDataQuantityTotal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONDataItemInventoryV2:
    item: Optional[GetInventory200ApplicationJSONDataItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    merchant: Optional[GetInventory200ApplicationJSONDataMerchant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    quantity: Optional[GetInventory200ApplicationJSONDataQuantity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONMetaPaginationPaginationV2:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    current_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONMeta:
    pagination: Optional[GetInventory200ApplicationJSONMetaPaginationPaginationV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSONItemInventoryArrayV2:
    data: Optional[List[GetInventory200ApplicationJSONDataItemInventoryV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[GetInventory200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetInventoryResponse:
    content_type: str = field(default=None)
    item_inventory_array_v2: Optional[GetInventory200ApplicationJSONItemInventoryArrayV2] = field(default=None)
    status_code: int = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    
