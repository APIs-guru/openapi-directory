from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class UpdateTarget:
    r"""UpdateTarget
    A maintenance track that you can switch the current track to.
    """
    
    database_version: Optional[str] = field(default=None)
    maintenance_track_name: Optional[str] = field(default=None)
    supported_operations: Optional[List[SupportedOperation]] = field(default=None)
    
