from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountSharingInfo:
    r"""AccountSharingInfo
    Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    shared_document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedDocumentVersion') }})
    
