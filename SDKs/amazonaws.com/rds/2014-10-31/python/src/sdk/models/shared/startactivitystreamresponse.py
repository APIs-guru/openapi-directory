from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class StartActivityStreamResponse:
    apply_immediately: Optional[bool] = field(default=None)
    engine_native_audit_fields_included: Optional[bool] = field(default=None)
    kinesis_stream_name: Optional[str] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    mode: Optional[ActivityStreamModeEnum] = field(default=None)
    status: Optional[ActivityStreamStatusEnum] = field(default=None)
    
