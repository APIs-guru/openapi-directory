from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResolveCustomerResult:
    r"""ResolveCustomerResult
    The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.
    """
    
    customer_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerIdentifier') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    
