from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobConfigurationTableCopy:
    create_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDisposition') }})
    destination_encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationEncryptionConfiguration') }})
    destination_expiration_time: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationExpirationTime') }})
    destination_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationTable') }})
    operation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationType') }})
    source_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTable') }})
    source_tables: Optional[List[TableReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTables') }})
    write_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    
