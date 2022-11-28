from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RecipientAccountReference:
    r"""RecipientAccountReference
    Recipient account information, like PayPal email. If the payment method is PayPal, this structure contains the recipient's PayPal email address.
    """
    
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceId') }})
    reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    
