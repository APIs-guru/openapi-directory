from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""EcommerceData
    E-commerce details associated with the user activity.
    """
    
    action_type: Optional[EcommerceDataActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    ecommerce_type: Optional[EcommerceDataEcommerceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecommerceType') }})
    products: Optional[List[ProductData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    transaction: Optional[TransactionData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
