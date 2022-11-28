from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class MetricStreamEntry:
    r"""MetricStreamEntry
    This structure contains the configuration information about one metric stream.
    """
    
    arn: Optional[str] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    firehose_arn: Optional[str] = field(default=None)
    last_update_date: Optional[datetime] = field(default=None)
    name: Optional[str] = field(default=None)
    output_format: Optional[MetricStreamOutputFormatEnum] = field(default=None)
    state: Optional[str] = field(default=None)
    
