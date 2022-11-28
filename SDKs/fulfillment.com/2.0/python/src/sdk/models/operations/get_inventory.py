from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetInventoryQueryParams:
    external_sku_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'externalSkuNames', 'style': 'form', 'explode': False }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    merchant_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'merchantIds', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInventorySecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2Item:
    r"""GetInventoryItemInventoryArrayV2ItemInventoryV2Item
    Item this inventory data is based on
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sku_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuReference') }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant:
    r"""GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant
    Merchant that owns this item
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal:
    available_to_promise: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableToPromise') }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity:
    total: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2ItemInventoryV2:
    item: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2Item] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    merchant: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    quantity: Optional[GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2MetaPaginationV2:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    current_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2Meta:
    pagination: Optional[GetInventoryItemInventoryArrayV2MetaPaginationV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetInventoryItemInventoryArrayV2:
    data: Optional[List[GetInventoryItemInventoryArrayV2ItemInventoryV2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[GetInventoryItemInventoryArrayV2Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetInventoryRequest:
    query_params: GetInventoryQueryParams = field()
    security: GetInventorySecurity = field()
    

@dataclass
class GetInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    item_inventory_array_v2: Optional[GetInventoryItemInventoryArrayV2] = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    
