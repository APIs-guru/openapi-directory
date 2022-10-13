from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FetchPageRequest:
    next_page_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionId' }})
    
