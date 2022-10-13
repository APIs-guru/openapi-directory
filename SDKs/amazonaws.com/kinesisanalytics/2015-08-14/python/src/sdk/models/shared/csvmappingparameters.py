from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CsvMappingParameters:
    record_column_delimiter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordColumnDelimiter' }})
    record_row_delimiter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordRowDelimiter' }})
    
