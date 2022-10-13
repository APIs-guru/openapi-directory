from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import alignment_enum


@dataclass_json
@dataclass
class InAppMessageBodyConfig:
    alignment: alignment_enum.AlignmentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alignment' }})
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    text_color: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextColor' }})
    
