from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class SnapshotSchedule:
    r"""SnapshotSchedule
    Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. 
    """
    
    associated_cluster_count: Optional[int] = field(default=None)
    associated_clusters: Optional[List[ClusterAssociatedToSchedule]] = field(default=None)
    next_invocations: Optional[List[datetime]] = field(default=None)
    schedule_definitions: Optional[List[str]] = field(default=None)
    schedule_description: Optional[str] = field(default=None)
    schedule_identifier: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
