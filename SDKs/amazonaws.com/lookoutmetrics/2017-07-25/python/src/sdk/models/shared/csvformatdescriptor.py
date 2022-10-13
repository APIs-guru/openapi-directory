from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import csvfilecompression_enum


@dataclass_json
@dataclass
class CsvFormatDescriptor:
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Charset' }})
    contains_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainsHeader' }})
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delimiter' }})
    file_compression: Optional[csvfilecompression_enum.CsvFileCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileCompression' }})
    header_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeaderList' }})
    quote_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuoteSymbol' }})
    
