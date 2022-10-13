from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import bulkemailentryresult


@dataclass_json
@dataclass
class SendBulkEmailResponse:
    bulk_email_entry_results: List[bulkemailentryresult.BulkEmailEntryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkEmailEntryResults' }})
    
