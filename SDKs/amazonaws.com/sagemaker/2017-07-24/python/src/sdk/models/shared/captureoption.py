from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import capturemode_enum


@dataclass_json
@dataclass
class CaptureOption:
    capture_mode: capturemode_enum.CaptureModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureMode' }})
    
