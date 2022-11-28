from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Order:
    r"""Order
    This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.
    """
    
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    
