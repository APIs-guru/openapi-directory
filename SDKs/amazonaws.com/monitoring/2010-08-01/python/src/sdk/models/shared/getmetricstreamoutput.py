from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GetMetricStreamOutput:
    arn: Optional[str] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    exclude_filters: Optional[List[MetricStreamFilter]] = field(default=None)
    firehose_arn: Optional[str] = field(default=None)
    include_filters: Optional[List[MetricStreamFilter]] = field(default=None)
    last_update_date: Optional[datetime] = field(default=None)
    name: Optional[str] = field(default=None)
    output_format: Optional[MetricStreamOutputFormatEnum] = field(default=None)
    role_arn: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    
