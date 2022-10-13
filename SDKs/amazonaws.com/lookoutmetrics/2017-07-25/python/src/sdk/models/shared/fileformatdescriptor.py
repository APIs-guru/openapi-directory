from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import csvformatdescriptor
from . import jsonformatdescriptor


@dataclass_json
@dataclass
class FileFormatDescriptor:
    csv_format_descriptor: Optional[csvformatdescriptor.CsvFormatDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvFormatDescriptor' }})
    json_format_descriptor: Optional[jsonformatdescriptor.JSONFormatDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JsonFormatDescriptor' }})
    
