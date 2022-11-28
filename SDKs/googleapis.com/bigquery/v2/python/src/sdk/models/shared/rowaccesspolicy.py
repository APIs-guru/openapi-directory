from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RowAccessPolicy:
    r"""RowAccessPolicy
    Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    filter_predicate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPredicate') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    row_access_policy_reference: Optional[RowAccessPolicyReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowAccessPolicyReference') }})
    
