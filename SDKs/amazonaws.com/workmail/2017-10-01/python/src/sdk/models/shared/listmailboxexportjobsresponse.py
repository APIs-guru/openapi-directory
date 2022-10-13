from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mailboxexportjob


@dataclass_json
@dataclass
class ListMailboxExportJobsResponse:
    jobs: Optional[List[mailboxexportjob.MailboxExportJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Jobs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
