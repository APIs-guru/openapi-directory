from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class MetricDataResult:
    r"""MetricDataResult
    A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
    """
    
    id: Optional[str] = field(default=None)
    label: Optional[str] = field(default=None)
    messages: Optional[List[MessageData]] = field(default=None)
    status_code: Optional[StatusCodeEnum] = field(default=None)
    timestamps: Optional[List[datetime]] = field(default=None)
    values: Optional[List[float]] = field(default=None)
    
