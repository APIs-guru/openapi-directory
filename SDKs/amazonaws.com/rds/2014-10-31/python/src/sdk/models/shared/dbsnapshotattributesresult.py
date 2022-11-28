from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSnapshotAttributesResult:
    r"""DbSnapshotAttributesResult
    <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p>
    """
    
    db_snapshot_attributes: Optional[List[DbSnapshotAttribute]] = field(default=None)
    db_snapshot_identifier: Optional[str] = field(default=None)
    
