from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CsvOptions:
    allow_jagged_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowJaggedRows' }})
    allow_quoted_newlines: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowQuotedNewlines' }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    field_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldDelimiter' }})
    null_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'null_marker' }})
    preserve_ascii_control_characters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preserveAsciiControlCharacters' }})
    quote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quote' }})
    skip_leading_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipLeadingRows' }})
    
