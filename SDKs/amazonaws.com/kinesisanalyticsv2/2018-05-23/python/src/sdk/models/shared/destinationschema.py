from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import recordformattype_enum


@dataclass_json
@dataclass
class DestinationSchema:
    record_format_type: recordformattype_enum.RecordFormatTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordFormatType' }})
    
