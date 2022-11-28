from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DbClusterBacktrack:
    r"""DbClusterBacktrack
    This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
    """
    
    backtrack_identifier: Optional[str] = field(default=None)
    backtrack_request_creation_time: Optional[datetime] = field(default=None)
    backtrack_to: Optional[datetime] = field(default=None)
    backtracked_from: Optional[datetime] = field(default=None)
    db_cluster_identifier: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
