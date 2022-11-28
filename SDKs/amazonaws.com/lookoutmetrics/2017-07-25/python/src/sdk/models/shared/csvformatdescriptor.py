from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CsvFormatDescriptor:
    r"""CsvFormatDescriptor
    Contains information about how a source CSV data file should be analyzed.
    """
    
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charset') }})
    contains_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainsHeader') }})
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delimiter') }})
    file_compression: Optional[CsvFileCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileCompression') }})
    header_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeaderList') }})
    quote_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteSymbol') }})
    
