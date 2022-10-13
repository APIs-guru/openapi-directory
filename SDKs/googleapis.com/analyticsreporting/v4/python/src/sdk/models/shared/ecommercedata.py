from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import productdata
from . import transactiondata

class EcommerceDataActionTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CLICK = "CLICK"
    DETAILS_VIEW = "DETAILS_VIEW"
    ADD_TO_CART = "ADD_TO_CART"
    REMOVE_FROM_CART = "REMOVE_FROM_CART"
    CHECKOUT = "CHECKOUT"
    PAYMENT = "PAYMENT"
    REFUND = "REFUND"
    CHECKOUT_OPTION = "CHECKOUT_OPTION"

class EcommerceDataEcommerceTypeEnum(str, Enum):
    ECOMMERCE_TYPE_UNSPECIFIED = "ECOMMERCE_TYPE_UNSPECIFIED"
    CLASSIC = "CLASSIC"
    ENHANCED = "ENHANCED"


@dataclass_json
@dataclass
class EcommerceData:
    action_type: Optional[EcommerceDataActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    ecommerce_type: Optional[EcommerceDataEcommerceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecommerceType' }})
    products: Optional[List[productdata.ProductData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    transaction: Optional[transactiondata.TransactionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
