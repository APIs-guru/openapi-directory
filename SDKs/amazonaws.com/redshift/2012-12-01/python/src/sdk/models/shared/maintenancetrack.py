from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class MaintenanceTrack:
    r"""MaintenanceTrack
    Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release. 
    """
    
    database_version: Optional[str] = field(default=None)
    maintenance_track_name: Optional[str] = field(default=None)
    update_targets: Optional[List[UpdateTarget]] = field(default=None)
    
