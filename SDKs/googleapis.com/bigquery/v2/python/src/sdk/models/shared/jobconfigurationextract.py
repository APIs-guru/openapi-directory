from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobConfigurationExtract:
    compression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compression') }})
    destination_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationFormat') }})
    destination_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUri') }})
    destination_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUris') }})
    field_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldDelimiter') }})
    print_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printHeader') }})
    source_model: Optional[ModelReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModel') }})
    source_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTable') }})
    use_avro_logical_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAvroLogicalTypes') }})
    
