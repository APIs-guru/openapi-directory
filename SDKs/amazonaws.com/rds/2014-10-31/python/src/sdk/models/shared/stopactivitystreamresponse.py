from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class StopActivityStreamResponse:
    kinesis_stream_name: Optional[str] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    status: Optional[ActivityStreamStatusEnum] = field(default=None)
    
