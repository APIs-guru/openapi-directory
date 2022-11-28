from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FetchPageRequest:
    r"""FetchPageRequest
    Specifies the details of the page to be fetched.
    """
    
    next_page_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    
