from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ClusterDbRevision:
    r"""ClusterDbRevision
    Describes a <code>ClusterDbRevision</code>.
    """
    
    cluster_identifier: Optional[str] = field(default=None)
    current_database_revision: Optional[str] = field(default=None)
    database_revision_release_date: Optional[datetime] = field(default=None)
    revision_targets: Optional[List[RevisionTarget]] = field(default=None)
    
