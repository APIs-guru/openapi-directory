from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LegacyReference:
    r"""LegacyReference
    Type defining the legacyReference container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.
    """
    
    legacy_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyItemId') }})
    legacy_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyTransactionId') }})
    
