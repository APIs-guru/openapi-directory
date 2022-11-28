from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DataShareAssociation:
    r"""DataShareAssociation
    The association of a datashare from a producer account with a data consumer. 
    """
    
    consumer_identifier: Optional[str] = field(default=None)
    created_date: Optional[datetime] = field(default=None)
    status: Optional[DataShareStatusEnum] = field(default=None)
    status_change_date: Optional[datetime] = field(default=None)
    
