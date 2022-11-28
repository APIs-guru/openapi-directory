from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DataShare:
    allow_publicly_accessible_consumers: Optional[bool] = field(default=None)
    data_share_arn: Optional[str] = field(default=None)
    data_share_associations: Optional[List[DataShareAssociation]] = field(default=None)
    producer_arn: Optional[str] = field(default=None)
    
