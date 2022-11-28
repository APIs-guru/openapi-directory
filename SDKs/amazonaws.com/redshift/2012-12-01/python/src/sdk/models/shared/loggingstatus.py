from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class LoggingStatus:
    r"""LoggingStatus
    Describes the status of logging for a cluster.
    """
    
    bucket_name: Optional[str] = field(default=None)
    last_failure_message: Optional[str] = field(default=None)
    last_failure_time: Optional[datetime] = field(default=None)
    last_successful_delivery_time: Optional[datetime] = field(default=None)
    logging_enabled: Optional[bool] = field(default=None)
    s3_key_prefix: Optional[str] = field(default=None)
    
