from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterDbRevisionsMessage:
    cluster_db_revisions: Optional[List[ClusterDbRevision]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
