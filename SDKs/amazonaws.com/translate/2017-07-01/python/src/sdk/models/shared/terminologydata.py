from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import terminologydataformat_enum


@dataclass_json
@dataclass
class TerminologyData:
    file: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'File' }})
    format: terminologydataformat_enum.TerminologyDataFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    
