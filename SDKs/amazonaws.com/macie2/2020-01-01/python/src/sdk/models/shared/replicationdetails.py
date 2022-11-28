from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicationDetails:
    r"""ReplicationDetails
    Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
    """
    
    replicated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicated') }})
    replicated_externally: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicatedExternally') }})
    replication_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationAccounts') }})
    
