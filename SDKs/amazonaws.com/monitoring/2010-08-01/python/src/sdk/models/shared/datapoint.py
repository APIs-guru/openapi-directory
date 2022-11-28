from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Datapoint:
    r"""Datapoint
    Encapsulates the statistical data that CloudWatch computes from metric data.
    """
    
    average: Optional[float] = field(default=None)
    extended_statistics: Optional[dict[str, float]] = field(default=None)
    maximum: Optional[float] = field(default=None)
    minimum: Optional[float] = field(default=None)
    sample_count: Optional[float] = field(default=None)
    sum: Optional[float] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    unit: Optional[StandardUnitEnum] = field(default=None)
    
