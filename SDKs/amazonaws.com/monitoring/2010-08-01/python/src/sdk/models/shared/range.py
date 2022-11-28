from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class Range:
    r"""Range
    Specifies one range of days or times to exclude from use for training an anomaly detection model.
    """
    
    end_time: datetime = field()
    start_time: datetime = field()
    
